const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashpassword: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
    timestamp: true
})

const userModel = mongoose.model('User',userSchema)

module.exports = userModel