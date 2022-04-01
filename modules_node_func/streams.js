function main(){
    
    const fs = require('fs');
    

    let data = '';

    let readableStream = fs.createReadStream(__dirname + '/input.txt');

    readableStream.setEncoding('UTF-8');

    // readableStream.on('data', (chuck)=>{
    //     //    console.log(chuck.toString()) 
    //     data += chuck;
    // });

    // readableStream.on('end', ()=>{
    //     console.log(data)
    // });


    // process.stdout.write('This ')
    // process.stdout.write('Is ')
    // process.stdout.write('a ')
    // process.stdout.write('standar Output ')
    // process.stdout.write('of System')
    // process.stdout.write(': Se acabo el \' stdout.write\' ')
    // process.stdout.write('===================== \n')

    // -------
    // Para recibir un dato, modificarlo y luego escribirlo hacemos esto...
    const stream = require('stream');
    const util = require('util');//Esto es para trabajar herencias 
    
    const Transform = stream.Transform;//Con esto, transformamos todas las lecturas de datos

    function Mayus(){
        //llamamos a la transformacion dle contexto.
        Transform.call(this);
    }
    //NI puta idea que es esto.
    util.inherits(Mayus, Transform);

    //A esta funcion, le agregamos una funcion mas como prototipo.
    Mayus.prototype._transform = function(chuck, codif, cback){
        chuckMayus = chuck.toString().toUpperCase();
        this.push(chuckMayus);
        cback();
    }

    let mayus = new Mayus();

    readableStream.pipe(mayus).pipe(process.stdout);

}
module.exports= {main};