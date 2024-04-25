const userModel = require('../models/userModel')

async function handleloginresponse(req, res) {
    res.send("hello")
}

async function handleSignup(req, res) {

    const user = new userModel({
        email: req.body.email,
        phone_no: req.body.phone_no,
        password: req.body.password
    })

    user.save()
    res.send(user)
    console.log(user)
}

module.exports = { handleloginresponse, handleSignup }