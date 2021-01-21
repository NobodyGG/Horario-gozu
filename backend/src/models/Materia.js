const {Schema, model} = require('mongoose');

const materiaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sigla: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = model('Materia', materiaSchema);