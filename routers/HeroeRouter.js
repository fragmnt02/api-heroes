
const express = require('express');

const router = express.Router();

const { getHeroes: obtenerHeroes, getHeroe: obtenerHeroe, crearHeroe, borrarHeroe, actualizarHeroe } = require('../resolvers/ResolverHeroe');

router.route('/')
    .get(obtenerHeroes)
    .post(crearHeroe);

router.route('/:id')
    .get(obtenerHeroe)
    .patch(actualizarHeroe)
    .delete(borrarHeroe);

module.exports = router;