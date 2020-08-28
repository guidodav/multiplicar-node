const { crearArchivo, listar } = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;

const colors = require('colors');




let argv2 = process.argv;

//console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('Listar');
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        console.log(argv.base);
        console.log(argv.limite);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado ${archivo}`))
            .catch(e => console.log(e));
    default:
        console.log('Comando no reconocido');
}

//let parametro = argv[2];

//let multiplicador = parametro.split("=")[1];



//console.log(argv2);

/*
multiplicar = () => {

    let datosArchivo = '';

    for (i = 1; i <= 10; i++) {
        resultado = i * multiplicador;
        datosArchivo += `el resultado es:${multiplicador} * ${i} = ${resultado}\n`;
    }

    const data = new Uint8Array(Buffer.from('Hello Node.js'));
    fs.writeFile(`./tablas/tabla_${multiplicador}.txt`, datosArchivo, (err) => {
        if (err) throw err;
        console.log('El archivo ha sido creado!');
    });


}*/