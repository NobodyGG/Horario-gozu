const {Schema, model} = require ('mongoose')


const docenteSchema = new Schema({
    nombres: {
        type: String,
        //required: true
    },
    apellidos:{
        type: String,
       // required: true
    },
    ci:{
        type: String,
        //required: true
    },
    email:{
        type: String,
        //required: true
    },
    telefono:{
        type: String
    },
    materia:{
        type: String
    }

})

module.exports = model('Docente', docenteSchema)