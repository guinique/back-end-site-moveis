const express = require('express')
const app = express()
const mongoose = require('mongoose')
const config = require('./config/config')
const cors = require('cors')

const url = config.bd_string
const options = { maxPoolSize: 50, 
    wtimeoutMS: 2500,
    useNewUrlParser: true }

mongoose.connect(url, options)
// mongoose.set('useCreateIndex', true)

mongoose.connection.on('error', (err) =>{
    console.log("Erro conexão BD" + err)
})

mongoose.connection.on('disconnected', () =>{
    console.log("Aplicação disconectada do BD")
})

mongoose.connection.on('connected', () =>{
    console.log("Aplicação conectada ao BD")
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cors())

const indexRoute = require('./Routes/index')
const usersRoute = require('./Routes/users')

app.use('/', indexRoute);
app.use('/users', usersRoute)

app.listen(3000)

module.exports = app