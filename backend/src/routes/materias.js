const {Router} = require('express');
const router = Router();

const {getMaterias, createMateria, getMateria, updateMateria, deleteMateria} = require('../controllers/materias.controller');

router.route('/')
    .get(getMaterias)
    .post(createMateria);

router.route('/:id')
    .get(getMateria)
    .put(updateMateria)
    .delete(deleteMateria)

module.exports = router;