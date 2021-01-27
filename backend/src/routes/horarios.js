const {Router} = require('express');
const router = Router();

const {getHorarios, createHorario} = require('../controllers/horarios.controller')

router.route('/')
    .get(getHorarios)
    .post(createHorario)

module.exports =  router;
