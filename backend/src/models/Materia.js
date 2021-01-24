const {Schema, model} = require('mongoose');

const materiaSchema = new Schema({
    name: {
        type: String,
        //required: true
    },
    sigla: {
        type: String,
        //required: true
    },
    teacher: {
        type: String,
        //required: true
    },
    grupo: {
        type: String

    },
    date: [{
        day: String,
        start: String,
        end: String
    }],

})

module.exports = model('Materia', materiaSchema);