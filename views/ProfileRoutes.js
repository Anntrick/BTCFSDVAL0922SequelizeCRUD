const express = require('express');
const router = express.Router()

const Perfil = require('../models/perfil')
const returnHi = require('../middlewares/returnHi')

const ProfileController = require('../controllers/ProfileControllers')

// CRUD READ PERFIL
router.get('/getPerfil', returnHi, (req, res) => {
    Perfil.findAll()
    .then(resp => {
        res.send(resp)
    })
})

// CRUD READ USUARIO Y SUS PUBLICACIONES
router.get('/publicaciones/:usuario' , ProfileController.getPublicaciones)

// CRUD CREATE PERFIL
router.post('/newProfile', async (req, res) => {
    try {
        let data = req.body
        let resp = await Perfil.create({
            usuario: data.usuario,
            nombre: data.nombre,
            seguidos: data.seguidos,
            seguidores: data.seguidores,
            biografia: data.biografia,
            mail_user: data.mail_user
        })

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
})

// CRUD UPDATE PERFIL
router.put('/updateProfile', async (req, res) => {
    try {
        let data = req.body
        let resp = await Perfil.update(
            {
                nombre: data.nombre,
                seguidos: data.seguidos,
                seguidores: data.seguidores,
                biografia: data.biografia
            },
            {
                where: { usuario: data.usuario }
            }
        )
        
        res.send(resp)

    } catch(err) {
        res.send(err)
    }
})

// CRUD DELETE PERFIL
router.delete('/deleteProfile/:user', async (req, res) => {
    try{
        let user = req.params.user
        let resp = await Perfil.destroy({
            where: { usuario: user }
        })

        if(resp == 1) {
            res.send("Se ha eliminado el perfil correctamente")
        } else {
            res.send("No se ha podido eliminar el registro")
        }

    } catch(err) {

    }
})


module.exports = router