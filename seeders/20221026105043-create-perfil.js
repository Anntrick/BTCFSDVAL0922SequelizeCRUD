'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('perfil', [
      {
        nomUsuario: "Lucy",
        nombre: "Lucia",
        seguidores: 10,
        seguidos: 10,
        biografia: "Esta es el perfil de Lucia",
        //usuarioMail: "lucia@gmail.com"
      },
      {
        nomUsuario: "Paquito",
        nombre: "Paco",
        seguidores: 10,
        seguidos: 10,
        biografia: "Esta es el perfil de Paco",
        //usuarioMail: "paco@gmail.com"
      },
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
