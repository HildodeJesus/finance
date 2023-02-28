import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
} from "sequelize";

import sequelize from "../database";

export class Income extends Model<
	InferAttributes<Income>,
	InferCreationAttributes<Income>
> {
	declare id: string;
	declare description: string;
	declare value: number;
	declare payment_method: string;
	declare due_date: Date;
	declare category_id: string;
	declare user_id: string;
}

Income.init(
	{
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		value: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		payment_method: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		due_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		category_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ sequelize, tableName: "incomes" }
);
