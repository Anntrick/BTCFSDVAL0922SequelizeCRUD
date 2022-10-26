'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('usuario', [
      { 
        mail: "paco2@gmail.com", 
        foto: "ejemplofoto.jpg", 
        sexo: "Hombre",
        fecha_nacimiento: "1985-10-22",
        telefono: "888555222",
        contrasena: "123456"

      },
      { 
        mail: "lucia2@gmail.com", 
        foto: "ejemplofoto.jpg", 
        sexo: "Mujer",
        fecha_nacimiento: "1995-10-22",
        telefono: "111222333",
        contrasena: "123456"

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
