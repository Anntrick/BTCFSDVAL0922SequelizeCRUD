const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Perfil extends Model {}

Perfil.init({
    nomUsuario: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            len: [5, 50]
        }
    },
    nombre: DataTypes.STRING,
    seguidos: DataTypes.INTEGER,
    seguidores: DataTypes.INTEGER,
    biografia: DataTypes.TEXT
}, {
    sequelize,
    modelName: 'perfil',
    freezeTableName: true,
    timestamps: false
})

module.exports = Perfil