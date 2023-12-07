const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone_no: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.pre("save", function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

userSchema.methods.comparePasswords = (plainText, callback) => {
    return callback(null, bcrypt.compareSync(plainText, this.password))
}

const userModel = mongoose.model("site_user", userSchema)

module.exports = userModel