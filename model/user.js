
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
        enum: ["male", "female"],
        require: true,
        trim: true
    },

    age:{
        type: Number,
        require: true,
    }
}, {
    timestamps: true
})

const usermodel = mongoose.model('Users', userSchema)

module.exports = usermodel
