const nodeProcess = require('child_process');
const cmd_process = nodeProcess.exec;

class CmdToolsService{
    exec_cmd_process(command="cd ."){
        return new Promise((resolve, reject)=>{
            cmd_process(`${command}`, (error, standOuput, standError)=>{
                if(error){
                    console.log(`Se presento un error al ejecutar el comando: ${command}`);
                    console.log("\n", error);
                    console.log("\n", standError);
                    reject(error);
                }else{
                    resolve(standOuput.toString());
                }
            });
        });
    }

    // exec_openFile_withApp(path, app){
    //     return new Promise((resolve, reject)=>{
    //         cmd_process(`${command}`, (error, standOuput, standError)=>{
            
    //         });
    //     });
    // }
} 

module.exports = CmdToolsService;