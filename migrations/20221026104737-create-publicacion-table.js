'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('publicacion', {
      id_publicacion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      fecha: Sequelize.DATE,
      likes: Sequelize.INTEGER,
      texto: Sequelize.TEXT,
      perfilNomUsuario: {
        type: Sequelize.STRING,
        references: {
          model: 'Perfil',
          key: 'nomUsuario'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
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
