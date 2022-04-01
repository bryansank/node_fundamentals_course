const express = require('express');
const router = express.Router();
const CmdToolsService = require('../logicService/cmdTools.service');
const cmdToolsService = new CmdToolsService();
const FileToolsService = require('../logicService/fileTools.service');
const fileToolsService = new FileToolsService();
const pathWithNameFile = [`${__dirname}\\..\\FilesDebbug\\`,  "dataDisplay.txt"];
const appWithOpen = "notepad.exe";

router.use(express.json()); // for parsing application/json

const sayHello = async (req,respo)=>{
    
    const bodyparam = req.body;
    
    if(Object.keys(bodyparam).length != 0){
        console.time("writeFileWithName");
        
        try {
            await fileToolsService.writeFileWithName(pathWithNameFile[0],pathWithNameFile[1],null,JSON.stringify(bodyparam))
            .then( 
                async data=>{
                    console.timeEnd("writeFileWithName");

                    const { errorFlag, dataMessage} = data;
                    if(!errorFlag){
                        
                        try {
                            await fileToolsService.fileExist(pathWithNameFile[0],pathWithNameFile[1]).then(
                                async flags=>{
                                    const {errorFlag, dataMessage} = flags;
                                    if(!errorFlag){
                                        try {
                                            await fileToolsService.readDataFile(pathWithNameFile[0], pathWithNameFile[1]).then(
                                                async data=>{
                                                    const {dataMessage} = data;

                                                    
                                                    await cmdToolsService.exec_cmd_process(`tasklist /fi \"IMAGENAME eq ${appWithOpen}\" /fi \"STATUS eq running\"`).then(
                                                        message=>{
                                                            if(message.length < 64){
                                                                cmdToolsService.exec_cmd_process(`taskkill \/f \/im ${appWithOpen} \/T`);
                                                                console.log("entro y cerro el programa");
                                                            }

                                                            cmdToolsService.exec_cmd_process(`cd ${pathWithNameFile[0]}`);
                                                            cmdToolsService.exec_cmd_process("dir")
                                                            cmdToolsService.exec_cmd_process(`${appWithOpen} ${pathWithNameFile[1]}`);

                                                            respo.status(200).json({"TODO": "GOOD", dataMessage});

                                                        },errorCmd=>{
                                                            console.log("Hubo un error en el comando al intentar abrir el archivo.");
                                                            console.log(errorCmd);
                                                            respo.status(200).json({"TODO": "GOOD", dataMessage});
                                                        }
                                                    );
                                                    
                                                }, error=>{
                                                    const {dataMessage} = error;
                                                    respo.status(501).json({"TODO":"bad 4", dataMessage});
                                                }
                                            );
                                        } catch (error4) {
                                            respo.status(501).json({"TODO":"bad 4", error4});
                                        }
                                    }else{
                                        respo.status(501).json({"TODO":"bad 3", dataMessage});
                                    }
                                },err=>{
                                    const {dataMessage} = err;
                                    respo.status(501).json({"TODO":"bad 2", dataMessage});
                                }
                            );
                        } catch (error) {
                            respo.status(501).json({error});
                        }

                    }else{
                        respo.status(501).json({"TODO":"bad 1", dataMessage});
                    }
                    // respo.status(200).json({"todo":"good", a});
            }).catch(
                err=>{
                    const {dataMessage} = err;
                    respo.status(501).json({dataMessage});
                }
            );
        } catch (error) {
            respo.status(501).json({error});
        }
        
    }else{
        respo.status(201).json({"status":"Envio una solicitud vacia"});
    }
}

const sayHelloTest = async (req,respo)=>{
    
    const bodyparam = req.body;
    
    if(Object.keys(bodyparam).length != 0){
// 
        // respo.status(200).json({"todo":"a"});
        await fileToolsService.openAndReadFile("").then((data)=>{
            console.log(data)
            respo.json({"todo":"good then"})
        },(err)=>{
            console.log(err)
            respo.json({"todo":"errom then"})
        });
    }else{
        respo.json({"todo":"good"})
    }
}

router.post('/', sayHello);

process.on('uncaughtException', async (error, origin)=>{
    await fileToolsService.writeFileWithName(pathWithNameFile[0],"errorFileException.txt",null,JSON.stringify(error.message));
    console.error(`\nOcurrio un error de tipo: (${origin}) en los modulos, ademas se genero un archivo en la ruta: -> ${pathWithNameFile[0]}errorFileException.txt|| ...  el StackTrace es este: \n`,error.message);
});

module.exports = router;