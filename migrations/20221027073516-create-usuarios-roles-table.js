'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuario-roles', { 
      usuarioMail: {
        type: Sequelize.STRING,
        references: {
          model: 'Usuario',
          key: 'mail'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      rolIdRol: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Rol',
          key: 'id_rol'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      },
      onCreate: DataTypes.DATE,
      onUpdate: DataTypes.DATE
    
    });
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
