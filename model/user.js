const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        require: true,
        trim: true
    },

    email:{
        type: String,
        require: true,
        unique: true,
        trim: true
    },

    gender:{
        type: String,
        require: true,
        trim: true
    },

    age:{
        type: Number,
        require: true,
        trim: true
    }
}, {
    timestamps: true
})

const usermodel = mongoose.model('users', userSchema)

model.exports = usermodel