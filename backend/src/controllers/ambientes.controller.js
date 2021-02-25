const ambientesController = {};

const Ambiente = require('../models/Ambiente');


ambientesController.getAmbientes = async(req, res)=>{
    const ambientes = await Ambiente.find()
    res.json(ambientes)
}

ambientesController.createAmbiente = async(req, res)=>{
    const {nro, piso, disponible} = req.body
    const newAmbiente = new Ambiente({
        nro,
        piso,
        disponible
    })

    await newAmbiente.save()
    res.json({message: 'Ambiente Agregado.'})
}

ambientesController.getAmbiente = async(req, res)=>{
    const ambiente = await Ambiente.findById(req.params.id)
    res.json(ambiente)
}

ambientesController.updateAmbiente = async(req, res)=>{
    const {nro, piso, disponible} = req.body
    await Ambiente.findByIdAndUpdate({_id: req.params.id},{
        nro,
        piso,
        disponible
    })
    res.json({message: 'Ambiente Actualizado.'})
}

ambientesController.deleteAmbiente = async(req, res)=>{
    await Ambiente.findByIdAndDelete(req.params.id)
    res.json({message: 'Ambiente Eliminado'})
}

module.exports = ambientesController;


