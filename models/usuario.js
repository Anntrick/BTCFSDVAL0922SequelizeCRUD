const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/db')

class Usuario extends Model {}

Usuario.init({
    mail: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
            isEmail: true,
            len: [1, 100]
        }
    },
    foto: DataTypes.STRING,
    sexo: DataTypes.ENUM('Hombre', 'Mujer','Otro'),
    fecha_nacimiento: DataTypes.DATE,
    telefono: {
        type: DataTypes.STRING,
        validate: {
            len: [9, 9]
        }
    },
    contrasena: {
        type: DataTypes.STRING,
        validate: {
            len: [1,45]
        }
    }
},
{
    sequelize,
    modelName: "usuario",
    //FreezeTableName nos conserva el nombre en vez de ponerlo en plural
    freezeTableName: true,
    //Evita que sequelize nos genere los campos createdAt y modifiedAt en la tabla
    timestamps: false
})

module.exports = Usuario