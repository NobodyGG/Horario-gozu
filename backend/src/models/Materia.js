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
    semestre: {
        type: String,
        required: true
    },
    grupo: {
        type: String
    },
    data: [{
        day: String,
        start: String,
        end: String
    }],
})

module.exports = model('Materia', materiaSchema);