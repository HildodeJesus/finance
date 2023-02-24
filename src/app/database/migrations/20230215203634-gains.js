"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("gains", {
			id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
			name: { type: Sequelize.STRING, allowNull: false },
			value: { type: Sequelize.FLOAT, allowNull: false },
			fixed: { type: Sequelize.BOOLEAN, allowNull: false },
			user_id: {
				type: Sequelize.STRING,
				allowNull: false,
				references: { model: "users", key: "id" },
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			},
			created_at: { type: Sequelize.DATE, allowNull: false },
			updated_at: { type: Sequelize.DATE, allowNull: false },
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable("gains");
	},
};
