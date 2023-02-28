"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("categories", {
			id: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
			name: { type: Sequelize.STRING, allowNull: false },
			color: { type: Sequelize.STRING, allowNull: true },
			type: {
				type: Sequelize.ENUM,
				allowNull: false,
				values: ["expense", "income"],
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("categories");
	},
};
