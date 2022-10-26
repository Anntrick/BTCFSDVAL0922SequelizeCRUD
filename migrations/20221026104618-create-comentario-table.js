'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comentario', {
      id_comentario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
      publicacionIdPublicacion: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Publicacion',
          key: 'id_publicacion'
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
