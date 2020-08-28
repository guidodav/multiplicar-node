//requires

const fs = require('fs');

const colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'red',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

let listar = (base, limite) => {

    for (i = 1; i <= limite; i++) {
        console.log(`${base} * ${i}`.yellow);

    }

}


crearArchivo = (multiplicador, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(multiplicador)) {

            reject(`el multiplicador ${multiplicador} no es un numero`.red);
            return;
        }


        let datosArchivo = '';

        for (i = 1; i <= limite; i++) {
            resultado = i * multiplicador;
            datosArchivo += `el resultado es:${multiplicador} * ${i} = ${resultado}\n`;
        }

        const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`./tablas/tabla_${multiplicador}_al_${limite}.txt`, datosArchivo, (err) => {
            if (err)
                reject(err)
            else {
                resolve(`tabla_${multiplicador}_al_${limite}.txt`);
            }
            //console.log(colors.info('El archivo tabla_'));
            console.log(colors.info('El archivo ') + colors.data(`tabla_${ multiplicador }_al_${ limite }.txt`) + colors.info(' ha sido creado!'));
        });


    })

}



module.exports = {

    crearArchivo,
    listar
}