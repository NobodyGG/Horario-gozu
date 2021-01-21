const { Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
    timetamps: true
})

module.exports = model('User', userSchema);