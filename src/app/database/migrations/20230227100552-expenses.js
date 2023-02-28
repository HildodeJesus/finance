"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("expenses", {
			id: {
				type: Sequelize.STRING,
				primaryKey: true,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			value: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			payment_method: {
				type: Sequelize.ENUM,
				allowNull: false,
				values: ["monthly", "notRecurring"],
			},
			due_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			category_id: {
				type: Sequelize.STRING,
				allowNull: false,
				references: { key: "id", model: "categories" },
			},
			user_id: {
				type: Sequelize.STRING,
				allowNull: false,
				references: { key: "id", model: "users" },
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
		await queryInterface.dropTable("expenses");
	},
};
