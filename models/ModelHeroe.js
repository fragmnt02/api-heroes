const { writeFileSync } = require('fs');
/**
 * HEROE:
 * id*: number
 * nombre*: string
 * profesion*: string
 * pais*: string
 * resenia: string
 * 
 */

function validarDatosActualizacion({ id, nombre, pais, profesion }) {
    return (id || id === 0) || nombre || pais || profesion
}

function actualizarDB(db) {
    writeFileSync('../heroes.json', JSON.stringify(db, null, 2));
}

function validarDatos({ id, nombre, profesion, pais }) {
    return (id || id === 0) && nombre && profesion && pais;
}

function crear (heroe) {
    if (validarDatos(heroe)) {
        // TODO: Validación que el id no exista en la bd.
        const db = leerTodos();
        db.push(heroe);
        actualizarDB(db);
    } else {
        throw new Error('Información incompleta para crear heroe');
    }
}

function leerTodos () {
    return require('../heroes.json');
}

function leerHeroe (id = 0) {
    const heroeEncontrado = leerTodos().find((heroe) => {
        return heroe.id === id;
    });
    if (heroeEncontrado) {
        return heroeEncontrado;
    } else {
        throw new Error(`No existe heroe para id ${id}`);
    }
}

function actualizarHeroe (id = 0, heroe) {
    if (validarDatosActualizacion(heroe)) {
        const db = leerTodos();
        const indice = db.findIndex((heroeTemp) => {
            return heroeTemp.id == id;
        });
        
        if (indice !== -1) {
            const heroeEncontrado = db[indice];
            const heroeActualizado = { ...heroeEncontrado, ...heroe };
            db[indice] = heroeActualizado;
            actualizarDB(db);
        } else {
            throw new Error('No existe heroe con ese id');
        }
    } else {
        throw new Error('Información incorrecta para actualizar heroe');
    }
}

function borrarHeroe (id = 0) {
    const db = leerTodos();
    const indice = db.findIndex((heroe) => {
        return heroe.id == id;
    })
    if (indice !== -1) {
        db.splice(indice, 1);
        actualizarDB(db);
    } else {
        throw new Error('No existe heroe con ese id');
    }
}

module.exports = {
    borrarHeroe,
    actualizarHeroe,
    leerHeroe,
    leerTodos,
    crear
}