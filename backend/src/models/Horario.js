const {Schema, model} = require('mongoose');

const horarioSchema = new Schema({
    sigla:{
        type: String,
        required: true
    },
    grupo: {
        type: String,
        required: true
    },
    ambiente:{
        type: String,
        required: true
    },
    date: [{
        day: String,
        start: String,
        end: String
    }],
})

module.exports = model('Horario', horarioSchema);