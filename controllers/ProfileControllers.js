const Perfil = require('../models/perfil')
const Publicacion = require('../models/publicacion')

const ProfileController = {}

ProfileController.getPublicaciones = async (req, res) => {
    try{
        let usuario = req.params.usuario
        let resp = await Perfil.findAll({
            where: { nomUsuario: usuario},
            include: {
                model: Publicacion,
                attributes: ['texto', 'likes']
            },
            attributes: ['nomUsuario', 'usuarioMail']
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}


module.exports = ProfileController