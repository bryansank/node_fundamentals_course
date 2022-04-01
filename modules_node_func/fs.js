const fs = require('fs');

const leer = (ruta, cback)=>{
    fs.readFile(ruta, (error, data)=>{
        //leido
        cback(data.toString());
    });
}

const escribir = (path, content, cback)=>{
    fs.writeFile(path, content, (err)=>{
        if(err){
            console.log("No pude escribir, este es el error: ", err);
        }else{
            console.log("yeah")
        }
    })
}

const borrar = (path, cback)=>{
    fs.unlink(path, cback);
}

// leer(`${__dirname}/file.txt`, console.log());
// escribir(`${__dirname}/file.txt`, "Soy un contenido nuevo", console.log());
borrar(`${__dirname}/file.txt`, console.log)