function main(){
    const http = require('http');

    http.createServer((req,resp)=>{
        console.log("Nueva Peticion!")
        console.log(req.url);

        

        // Si queremos que sea segun rutas y demas....
        switch (req.url) {
            case '/':
                resp.writeHead(201, {'Content-Type': 'text/plain'})
                resp.write('Estas en la raiz.');
                break;
            case '/hola':
                resp.writeHead(201, {'Content-Type': 'text/plain'})
                resp.write('HOLA QUE TAL!');
                break;
        
            default:
                resp.writeHead(404, {'Content-Type': 'text/plain'})
                resp.write('Error 404');
                break;
        }


        
        // resp.writeHead(201, {'Content-Type': 'text/plain'})
        // resp.write('HOLA YA SE USAR HTTP DE NODEJS');
        resp.end();
        
    }).listen(3000);

    console.log("Escuchando el http en el puerto 3000:")
};

module.exports={main}