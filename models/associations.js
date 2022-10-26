const Usuario = require('./usuario')
const Perfil = require('./perfil')
const Comentario = require('./comentario')
const Publicacion = require('./publicacion')
const Rol = require('./rol')

//Relacion 1 a 1 usuario-perfil
Usuario.hasOne(Perfil)
Perfil.belongsTo(Usuario)

//Relacion 1 a N perfil-comentario
Perfil.hasMany(Comentario)
Comentario.belongsTo(Perfil)

//Relacion 1 a N comentario-publicacion
Publicacion.hasMany(Comentario)
Comentario.belongsTo(Publicacion)

//Relacion 1 a N publicacion-perfil
Perfil.hasMany(Publicacion)
Publicacion.belongsTo(Perfil)

//Relacion N a N rol-usuario
Usuario.belongsToMany(Rol, { through: "usuario-roles" })
Rol.belongsToMany(Usuario, { through: "usuario-roles" })