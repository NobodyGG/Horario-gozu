const materiasController = {};

const Materia = require('../models/Materia')

materiasController.getMaterias = async (req, res) => {
    const materias = await Materia.find();
    res.json(materias);
}

materiasController.createMateria = async (req, res) => {
    const {name, sigla, semestre, grupo, horas, docente} = req.body;
    const newMateria = new Materia({
        name: name,
        sigla: sigla,
        semestre: semestre,
        grupo,
        horas,
        docente
    });
    //console.log(newMateria)
    await newMateria.save();
    res.json({message: 'Materia Guardada'})
}

materiasController.getMateria = async (req, res) => {
    const materia = await Materia.findById(req.params.id)
    res.json(materia)
}

materiasController.updateMateria = async (req, res) => {
    //console.log(req.params.id, req.body)
    const {name, sigla, semestre, grupo, horas, docente} = req.body;
    await Materia.findOneAndUpdate({_id: req.params.id}, {
        name: name,
        sigla: sigla,
        semestre: semestre,
        grupo,
        horas,
        docente
    });
    res.json({message: 'Materia Actualizada'})
}

materiasController.deleteMateria = async (req, res) => {
    await Materia.findByIdAndDelete(req.params.id);
    res.json({message: 'Materia Eliminada'})
}

module.exports = materiasController;