const fs = require('fs');
let listadoPorHacer = [];

const guardarDB = () => {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(listadoPorHacer);
        fs.writeFile(`db/data.json`, data, (err) => {
            if (err) reject(err)
            else resolve(`data.json`);

        });
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    return listadoPorHacer
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    try {
        cargarDB();
        let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
        if (index >= 0) {
            listadoPorHacer[index].completado = completado;
            guardarDB();
            return true;
        } else { return false; }
    } catch (error) {
        return error;
    }
}

const borrar = (descripcion) => {
    try {
        cargarDB();
        let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
        if (index >= 0) {
            listadoPorHacer.splice(index, 1);
            guardarDB();
            return true;
        } else { return false; }
    } catch (error) {
        return error;
    }
}

module.exports = { crear, getListado, actualizar, borrar }