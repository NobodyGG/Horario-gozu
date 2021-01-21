const {Router} = require('express');
const router = Router();

const {getHorarios} = require('../controllers/horarios.controller')

router.route('/')
    .get(getHorarios)

module.exports =  router;
