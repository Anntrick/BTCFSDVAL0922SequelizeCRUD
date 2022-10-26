'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comentario', [
      {
        id_comentario: 10,
        fecha: "2022-10-26 12:55:00",
        likes: 10,
        texto: "Hola a todos",
        //perfilNomUsuario: "Lucy",
        //publicacionIdPublicacion: 10
      },
      {
        id_comentario: 11,
        fecha: "2022-10-26 13:00:00",
        likes: 10,
        texto: "Me encanta!",
        //perfilNomUsuario: "Lucy",
        //publicacionIdPublicacion: 11
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
