const messageCmd = "\n"+
"\n"+ "=============================================================================="+
"\n"+ "=============================================================================="+
"\n"+ "=============================================================================="+
"\n"+ "=============================================================================="+
"\n"+ "=============================================================================="+
"\n"+ "|                                                                            |"+
"\n"+ "|                                                                            |"+
"\n"+ "|                                                                            |"+
"\n"+ "|                            Inicio de Express!                              |"+
"\n"+ "|                                                                            |"+
"\n"+ "|                                                                            |"+
"\n"+ "|                                                                            |"+
"\n"+ "|                                                                            |"+
"\n"+ "=============================================================================="+
"\n"+ "=============================================================================="+
"\n"+ "=============================================================================="+
"\n"+ "=============================================================================="+
"\n"+ "=============================================================================="+
"";
// ==========================================================
// ||
// ||
// ||   Ahora con Exprees
// ||
// ||
// ==========================================================
// Vamos a importar una libreria con datos irreales.
const faker = require('faker'); //5.5.3v porque la demas esta obsoleta.
const express = require('express');
const expressApp = express();
const PORT = 3005;
const inRouter = express.Router();

const testModuleRouter=require('./routes_pages/testRouter.js');

expressApp.use('/api/v2/', inRouter);
inRouter.use('/test/', testModuleRouter);

//ADEMAS, creamos una ruta MADRE /api/ y una ruta de versiones /v1/

// Aqui ahora mudamos el codigo a su ROUTER
//PRODUCTOS --------------------------------------
// Ahora creamos un router apuntando a nuestras rutas y usamos estos medotos cada vez que entremos en productos.


// Que hacemos si la ruta que esta debajo, choca con /products/:id ?? 
// Pues se coloca PRIMERO que la que espera un param
// Y Asi solucionamos la especifidad de la ruta..
// expressApp.get('/productos/filter', (req,resp)=>{
//     resp.send("Soy la pagina de Filter, no me confundan con productos/:id");
// });

// expressApp.get('/productos/:id', (req,resp)=>{
//     const params = req.params.id;
//     const id = req.params.id;
//     resp.json([
//         {
//             id,
//             "name": "Bryan",
//             "lasname": "Key"
//         }
//     ]);
// });

// expressApp.get('/productos', (req,resp)=>{
//     const productos = [];

//     const size = req.query.size;
//     const limit = size || 10;

//     for (let index = 0; index < limit; index++) {
//         productos.push({name: faker.name.firstName(), pricd: parseInt(faker.commerce.price(), 10), iamge: faker.image.imageUrl() });
//     }

//     resp.json(productos);

// });
// fin PRODUCTOS --------------------------------------



// Podemos tener ademas de params, podemos tener QUERYS, ejemplo:
// api/productos
// api/productos?pagina=1
// api/productos?limite=10&offset=0
// api/productos?region=USA
// api/productos?region=USA%brand=microsoft
// expressApp.get('/users', (req,resp)=>{
//     const {limit, offset} = req.query;
//     if(limit && offset){
//         resp.json({
//             limit,
//             offset
//         });
//     }else{
//         resp.send('No hay nada')
//     }
// });


// http://localhost:3005/a/50/b/leche/c/200
// expressApp.get('/a/:id/b/:producto/c/:precio', (req,resp)=>{
//     const {id, producto, precio } = req.params;
//     resp.json(
//         {
//             id,
//             producto,
//             precio
//         }
//     );
// });

// expressApp.get('/', (req,resp)=>{
//     resp.json([
//         {
//             "name": "Bryan",
//             "lasname": "Key"
//         },
//         {
//             "name": "Bryan",
//             "lasname": "Key"
//         }
//     ]);
// });

// Escuchar el puerto y correr el servidor.
expressApp.listen(PORT, ()=>{/*console.log(`Running in: ${PORT}`)*/});

// Esta es la Ruta inicial...
// expressApp.get('/', (req,resp)=>{
//     resp.send('Hi! It is alive');
// });

// ==========================================================
// ||
// ||
// ||   TERMINA con Exprees
// ||
// ||
// ==========================================================
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




// process.on('uncaughtException', (error, origin, b, c, d)=>{
//     console.error(`Ocurrio un erro de tipo: (${origin}), ... \'${error.message}\' el StackTrace es este: \n`, 
//         error.stack
//         // error.stack.split(' at ')[1], 
//         // error.stack.split('at')[2]
//     );
// });

// Esto es para consolear lo que se le pasa por parametros en la consola, ejemplo:
// node process.js "Patricio Manuel" Ugarte 27
// console.log("Procesos args")
// console.log(process.argv);


// lib.main();
