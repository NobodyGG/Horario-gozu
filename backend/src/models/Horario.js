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
    Ambiente:{
        type: String,
        required: true
    }
})

module.exports = model('Horario', horarioSchema);