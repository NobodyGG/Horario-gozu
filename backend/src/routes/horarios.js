const {Router} = require('express');
const router = Router();

const {getHorarios, createHorario, deleteHorario, getHorario} = require('../controllers/horarios.controller')

router.route('/')
    .get(getHorarios)
    .post(createHorario)


router.route('/:id')
    .delete(deleteHorario)
    .get(getHorario)


module.exports =  router;
