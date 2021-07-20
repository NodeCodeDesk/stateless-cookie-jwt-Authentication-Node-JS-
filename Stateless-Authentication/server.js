const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const router = require('./routes/routes')
const {verifyToken, generateToken } = require('./controller/authController')

const app = express()

// db config
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/usersDb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(cookieParser())

app.get('/',verifyToken)
router(app)

app.listen(4000)