// 
// bcrypt.hash(micontrasena, numeroDeVecesQueQueremosQueLoCifre,)
// bcrypt.hash(micontrasena, 5, (err,  hash)=>{
//     // Hash para mi password
//     console.log(hash)

//     // Aqui comparamos si la contra es igual al hash
//     bcrypt.compare(contrasena, hash, (err, res)=>{
//         console.log(res)
//     })
// })

// Sharp es una libreria para trabajar con C++.

// Luxor, Day.js
// Es una mejor alternativa a moment.js....

// ================================================================================
// ================================================================================
// ================================================================================
// const lib = require('./childprocess.js');
// const lib = require('./http.js');
// const lib = require('./os.js');
// const lib = require('./process.js');
// const lib = require('./buffer.js');
// const lib = require('./streams.js');
// const lib = require('./benchmark.js');

// Queremos hacer debugger...
//Asi que haremos un node --inspect -rutaa
//
//Si no queremos correr este comando.
//abrir en chrome
//
//chrome://inspect
// const lib = require('./http.js');
// const lib = require('./errosfirst.js');
//  const lib = require('./Tools_npm/puppeteer/puppeteer.js');




process.on('uncaughtException', (error, origin, b, c, d)=>{
    console.error(`Ocurrio un erro de tipo: (${origin}), ... \'${error.message}\' el StackTrace es este: \n`, 
        error.stack
        // error.stack.split(' at ')[1], 
        // error.stack.split('at')[2]
    );
});

// Esto es para consolear lo que se le pasa por parametros en la consola, ejemplo:
// node process.js "Patricio Manuel" Ugarte 27
// console.log("Procesos args")
// console.log(process.argv);


lib.main();