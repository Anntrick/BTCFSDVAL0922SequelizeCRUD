const express = require('express')

const app = express()

const db = require('./db/db')
const Usuario = require('./models/usuario')

const PORT = 3000

//middleware
app.use(express.json())


// CRUD READ
app.get('/', (req, res) => {
    Usuario.findAll({
        where: { sexo: 'Mujer' },
        limit: 1
    })
    .then(resp => {
        res.send(resp)
    })
})

//Buscamos por Primary key
app.get('/findID/:mail', (req, res) => {
    let mail = req.params.mail
    Usuario.findByPk(mail)
    .then(resp => {
        res.send(resp)
    })
})


// CRUD CREATE
app.post('/register', async (req, res) => {
    try {
        let data = req.body
        let resp = await Usuario.create({
            mail: data.mail,
            foto: data.foto,
            sexo: data.sexo,
            fecha_nacimiento: data.fecha_nacimiento,
            telefono: data.telefono,
            contrasena: data.contrasena
        })

        res.send(resp)
    } catch(error) {
        res.send(error)
    }
})



// app.get('/mujeres', (req, res) => {
//     sequelize.query('SELECT * FROM usuario WHERE sexo = "Mujer";')
//     .then(resp => {
//         res.send(resp)
//     })
// })


app.listen(PORT, ()=> {
    console.log(`Servidor arrancado en el puerto ${PORT}` )
})