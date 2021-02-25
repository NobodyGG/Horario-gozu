const {Schema, model} = require('mongoose');

const horarioSchema = new Schema({
    semestre:{
        type: String
    },
    sigla:{
        type: String,
        //required: true
    },
    grupo: {
        type: String,
        //required: true
    },
    ambiente:{
        type: String,
        //required: true
    }
})

module.exports = model('Horario', horarioSchema);