const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080
const mongoUrl = 'mongodb+srv://vaultadmin:vaultadmin@cluster0.jzofe.mongodb.net/vault'
const routes = require('./routes/api')
const cors = require('cors')

mongoose.connect(mongoUrl, {})
    .then(console.log('Mongo DB Connected!!'))
    .catch((error) => {
        console.log(error)
    })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('tiny'))
app.use('/api', routes)
app.listen(PORT, console.log(`Server Is Started At ${PORT}`))

module.exports = app