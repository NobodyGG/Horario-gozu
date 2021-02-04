const { Router } = require ('express')

const router = Router()

const {getDocentes, createDocente, updateDocente, deleteDocente, getDocente} = require('../controllers/docentes.controller')

router.route('/')
    .get(getDocentes)
    .post(createDocente)


router.route('/:id')
    .get(getDocente)
    .put(updateDocente)
    .delete(deleteDocente)

module.exports = router;