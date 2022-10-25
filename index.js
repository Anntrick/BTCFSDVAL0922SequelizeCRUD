const express = require('express')

const app = express()

const db = require('./db/db')
const Perfil = require('./models/perfil')

const router = require('./router')


const PORT = 3000

//middleware
app.use(express.json())

app.use(router)




// app.get('/mujeres', (req, res) => {
//     sequelize.query('SELECT * FROM usuario WHERE sexo = "Mujer";')
//     .then(resp => {
//         res.send(resp)
//     })
// })


app.listen(PORT, ()=> {
    console.log(`Servidor arrancado en el puerto ${PORT}` )
})