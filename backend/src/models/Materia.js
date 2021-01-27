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
        required: true
    },
    grupo: {
        type: String

    }
})

module.exports = model('Materia', materiaSchema);