const horariosController = {};

const Horario = require('../models/Horario')

horariosController.getHorarios = async(req, res) => {
    const horarios = await Horario.find();
    res.json(horarios)
}

module.exports = horariosController;