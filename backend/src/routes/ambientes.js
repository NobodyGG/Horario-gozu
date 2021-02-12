const {Router} = require('express')

const router= Router()

const { getAmbientes, createAmbiente, getAmbiente, updateAmbiente, deleteAmbiente } = require('../controllers/ambientes.controller')


router.route('/')
    .get(getAmbientes)
    .post(createAmbiente)

router.route('/:id')
    .get(getAmbiente)
    .put(updateAmbiente)
    .delete(deleteAmbiente)


module.exports = router;