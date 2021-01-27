const horariosController = {};

const Horario = require('../models/Horario')

horariosController.getHorarios = async(req, res) => {
    const horarios = await Horario.find();
    res.json(horarios)
}

horariosController.createHorario = async(req, res)=>{
    const {sigla, grupo, ambiente, date} = req.body;
    const newHorario = new Horario({
        sigla,
        grupo,
        ambiente,
        date
    })

    await newHorario.save();
    res.json({message: 'Horario Creado'})
}


module.exports = horariosController;