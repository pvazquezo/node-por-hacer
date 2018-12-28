const optC = {
    descripcion: {
        demand: true,
        descripcion: 'Descripción de la tarea por hacer',
        alias: 'd'
    }
}



const optA = {
    descripcion: {
        demand: true,
        descripcion: 'Descripción de la tarea por hacer',
        alias: 'd'
    },
    completado: {
        default: true,
        descripcion: 'Actualización de estatus de la tarea',
        alias: 'c'
    }
}
const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', optC)
    .command('actualizar', 'Actualizar el estado completado de una tarea', optA)
    .command('borrar', 'Borrar una tarea por hacer', optC)
    .help()
    .argv;

module.exports = { argv }