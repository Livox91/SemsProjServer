const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const morgan = require('morgan')


mongoose.connect('mongodb://127.0.0.1:27017/Semester_Project')
    .then(() => console.log('Mogoose Connected'))
    .catch(error => console.log(err));



const app = express()
const port = 3000

//routes
const loginRoute = require('./routes/loginRoute')
const homeRoute = require('./routes/mainRoute')


// MiddleWare

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
    session({
        key: 'user_sid',
        secret: 'none',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000,
        }
    })
)
app.use(express.json())

//Routing

app.get('/', homeRoute)
app.use("/login", loginRoute)
app.listen(port)