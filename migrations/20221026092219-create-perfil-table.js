'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('perfil', {
      nomUsuario: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      nombre: Sequelize.STRING,
      seguidos: Sequelize.INTEGER,
      seguidores: Sequelize.INTEGER,
      biografia: Sequelize.TEXT,
      usuarioMail: {
        type: Sequelize.STRING,
        references: {
          model: 'Usuario',
          key: 'mail'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
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
