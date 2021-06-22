const model = require('../models/ModelHeroe');

exports.getHeroes = function (req, res) {
    const heroes = model.leerTodos();
    res.status(200).json(heroes);
}

exports.getHeroe = function (req, res) {
    const { id } = req.params; // pasar numero
    try {
        const heroe = model.leerHeroe(parseInt(id));
        res.status(200).json(heroe);
    } catch (error) {
        if (error.message.includes('No existe heroe para id')) {
            res.status(404).send(error.message);

        }
    }
}

exports.crearHeroe = function (req, res) {
    const nuevoHeroe = req.body;
    try {
        model.crear(nuevoHeroe);
        res.status(200).json(nuevoHeroe);
    } catch (error) {
        res.status(409).send(error.message);
    }
}

exports.actualizarHeroe = function () {
    
}

exports.borrarHeroe =  function () {
    
}