function main(){

    const childProcess = require('child_process');
    const exec_process = childProcess.exec;
    const spawn = childProcess.spawn;
    // Para ejecutar en la terminal
    
    // exec_process('ls -la', (err, stdout, sterror) =>{

    //     if(err){
    //         console.error(err);
    //         console.error(sterror);
    //         return false;
    //     }

    //     console.log(stdout);
    // });

    // proceso nuevo de node
    let process = spawn('ls', ['-la']);
    console.log(process);
    process.on('data', ()=>{
        console.log("Escuchando el evento")
    })

    process.on('exit', ()=>{
        console.log("Escuchando el evento")
    })

}

module.exports = { main }
// Asi se importan modulos en NODEJS.