import {
	Model,
	InferAttributes,
	InferCreationAttributes,
	DataTypes,
	ForeignKey,
} from "sequelize";

import sequelize from "../database";
import { User } from "./UserModel";

export class Cost extends Model<
	InferAttributes<Cost>,
	InferCreationAttributes<Cost>
> {
	declare id: string;
	declare name: string;
	declare value: number;
	declare fixed: boolean;
	declare userId: ForeignKey<string>;
}

Cost.init(
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
	{ sequelize, tableName: "costs" }
);

// Cost.belongsTo(User, { foreignKey: "user_id" });
