const {Schema, model} = require('mongoose')

const ambienteSchema = new Schema({
    nro:{
        type: String
    },
    piso:{
        type: String
    },
    disponible:{
        type: String
    }
})


module.exports = model('Ambiente', ambienteSchema);