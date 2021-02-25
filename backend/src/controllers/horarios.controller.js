const horariosController = {};

const Horario = require('../models/Horario')

horariosController.getHorarios = async(req, res) => {
    const horarios = await Horario.find();
    res.json(horarios)
}

horariosController.createHorario = async(req, res)=>{
    const {semestre, sigla, grupo, ambiente} = req.body;
    const newHorario = new Horario({
        semestre,
        sigla,
        grupo,
        ambiente,
    })

    await newHorario.save();
    res.json({message: 'Horario Creado'})
}

horariosController.getHorario = async(req, res)=>{
    const horario = await Horario.findById(req.params.id)
    res.json(horario)
}

horariosController.deleteHorario = async(req, res)=>{
    await Horario.findByIdAndDelete(req.params.id)
    res.json({message: 'Horario Eliminado'})
}
module.exports = horariosController;