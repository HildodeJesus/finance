import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
	ForeignKey,
} from "sequelize";

import sequelize from "../database";

export class Gain extends Model<
	InferAttributes<Gain>,
	InferCreationAttributes<Gain>
> {
	declare id: string;
	declare name: string;
	declare value: number;
	declare fixed: boolean;
	declare userId: ForeignKey<string>;
}

Gain.init(
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		value: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		fixed: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		userId: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{ sequelize, tableName: "gains" }
);