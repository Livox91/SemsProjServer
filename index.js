const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const morgan = require('morgan')
const cors = require('cors')


mongoose.connect('mongodb+srv://livox1180:zakihaider@semsproj.e9trhe8.mongodb.net/SemsProj?retryWrites=true&w=majority&appName=SemsProj')
    .then(() => console.log('Mogoose Connected'))
    .catch(error => console.log(error));



const app = express()
const port = 3000
app.use(cors())
//routes
const loginRoute = require('./routes/loginRoute')
const homeRoute = require('./routes/mainRoute')
const productRoute = require('./routes/productRoute')


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
app.use("/products", productRoute)
app.listen(port)