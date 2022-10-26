'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
   
  }
  rol.init({
    id_rol: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rol',
    freezeTableName: true,
    timestamps: false
  });
  return rol;
};