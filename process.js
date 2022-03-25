// todo el proceso de node.
function main(){

    process.on('beforeExit', ()=>{
        console.log("El proceso va a terminar")
    });

    process.on('exit', ()=>{
        console.log("Ale! El proceso acabo.")
        // Esto es el cierre de tu proceso, si colocas algo aqui, que no se SINCRONO... NO SE VA A EJECUTAR
        //exit: Se ejecuta cuando node detiene el eventloop y cierra su proceso principal.
    });

    process.on('UncaughtException', (error, origin)=>{
        console.error("BRYAN! UncaughtException HUBO ESTOO....... ", origin, error)
    });
    // process.on('unhandleRejection', ()=>{
    //     console.log("Ale! El proceso acabo.")
    // });
}

module.exports = {main}