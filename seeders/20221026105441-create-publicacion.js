'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('publicacion', [
      {
        id_publicacion: 10,
        fecha: "2022-10-26 12:55:00",
        likes: 100,
        texto: "Hola mundo!!",
        //perfilNomUsuario: "Lucy"
      },
      {
        id_publicacion: 11,
        fecha: "2022-10-26 12:56:00",
        likes: 120,
        texto: "Hola sequelize!!",
        //perfilNomUsuario: "Paquito"
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
