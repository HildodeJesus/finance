import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
} from "sequelize";
import bcrypt from "bcrypt";

import sequelize from "../database";
import { Income } from "./IncomeModel";
import { Expense } from "./ExpenseModel";

export class User extends Model<
	InferAttributes<User>,
	InferCreationAttributes<User>
> {
	declare id: string;
	declare name: string;
	declare email: string;
	declare password: string;
}

User.init(
	{
		id: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: { msg: "O nome é obrigatório" },
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: {
				msg: "Esse email já foi cadastrado anteriormente",
				name: "email",
			},
			validate: {
				isEmail: { msg: "O email é inválido" },
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: {
					args: [6, 100],
					msg: "A senha deve conter entre 6 e 100 caracteres.",
				},
			},
		},
	},
	{ sequelize, tableName: "users" }
);

User.beforeSave(user => {
	const hashedPassword = bcrypt.hashSync(user.password, 8);
	user.password = hashedPassword;
});

User.hasMany(Income, { foreignKey: "user_id" });
User.hasMany(Expense, { foreignKey: "user_id" });
