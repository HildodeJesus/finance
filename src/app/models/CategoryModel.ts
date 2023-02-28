import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
} from "sequelize";

import sequelize from "../database";
import { Expense } from "./ExpenseModel";
import { Income } from "./IncomeModel";

export class Category extends Model<
	InferAttributes<Category>,
	InferCreationAttributes<Category>
> {
	declare id: string;
	declare name: string;
	declare color: string;
	declare type: string;
}

Category.init(
	{
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false,
		},

		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: { msg: "A categoria deve ter um nome" },
			},
		},

		color: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				notEmpty: { msg: "A categoria deve ter um nome" },
			},
		},

		type: {
			type: DataTypes.ENUM,
			allowNull: false,
			values: ["expense", "income"],
		},
	},
	{
		sequelize,
		tableName: "categories",
	}
);

Category.hasMany(Income, { foreignKey: "category_id" });
Category.hasMany(Expense, { foreignKey: "category_id" });
