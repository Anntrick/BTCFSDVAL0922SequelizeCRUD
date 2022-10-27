'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usuario-roles', [
      {
        usuarioMail: 'paco2@gmail.com',
        rolIdRol: 1,
        createAt: '2022-10-26 12:00:00',
        updateAt: '2022-10-26 12:00:00'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
