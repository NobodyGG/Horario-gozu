const docentesController = {};

const Docente = require('../models/Docente');

docentesController.getDocentes = async(req, res)=>{
    const docentes = await Docente.find()
    res.json(docentes)
    
}

docentesController.createDocente = async(req, res)=>{
    const {nombres, apellidos, ci, email, telefono, horasTrabajo} = req.body
    const newDocente = new Docente({
        nombres,
        apellidos,
        ci,
        email,
        telefono,
        horasTrabajo
    })

    await newDocente.save()
    res.json({message: 'Docente Agregado.'})
}

docentesController.getDocente = async(req, res) =>{
    const docente = await Docente.findById(req.params.id)
    res.json(docente)
}

docentesController.updateDocente = async(req, res) =>{
    const {nombres, apellidos, ci, email, telefono, horasTrabajo} = req.body
    await Docente.findByIdAndUpdate({_id: req.params.id},{
        nombres,
        apellidos,
        ci,
        email,
        telefono,
        horasTrabajo
    })
    res.json({message: 'Docente Actualizado'})
}

docentesController.deleteDocente = async(req, res)=>{
    await Docente.findByIdAndDelete(req.params.id)
    res.json({message:'Docente Eliminado'})
}

module.exports = docentesController;