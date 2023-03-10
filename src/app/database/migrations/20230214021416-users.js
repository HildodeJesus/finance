"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("users", {
			id: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
			name: { type: Sequelize.STRING, allowNull: false },
			email: { type: Sequelize.STRING, unique: true, allowNull: false },
			password: { type: Sequelize.STRING, allowNull: false },
			created_at: { type: Sequelize.DATE, allowNull: false },
			updated_at: { type: Sequelize.DATE, allowNull: false },
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable("users");
	},
};
