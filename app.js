const argv = require('./Config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        // crearArchivo(argv.base, argv.limite).then(Mensaje => console.log(`Archivo creado: ${Mensaje.green}`))
        //     .catch(e => { console.log(e); })

        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('==================================='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==================================='.green);
        }
        break;

    case 'actualizar':
        let isOK = porHacer.actualizar(argv.descripcion, argv.completado);
        if (isOK) {
            console.log("Actualización exitosa".green);
        } else {
            console.log("Hubo un error en la actualización".red, isOK);
        }
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log("Borrado exitosa".green);
        } else {
            console.log("Hubo un error en el borrado".red, isOK);
        }
        break;
    default:
        console.log('Comando no reconocido');
        break;
}