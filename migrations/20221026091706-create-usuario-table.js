'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
      mail: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      foto: Sequelize.STRING,
      sexo: Sequelize.ENUM('Hombre', 'Mujer', 'Otro'),
      fecha_nacimiento: Sequelize.DATE,
      telefono: {
        type: Sequelize.STRING
      },
      contrasena: {
        type: Sequelize.STRING
      }
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
