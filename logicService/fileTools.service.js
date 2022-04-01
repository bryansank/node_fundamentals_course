const fSystem = require('fs');
const CmdToolsService = require('../logicService/cmdTools.service');
const cmdToolsService = new CmdToolsService();

class FileToolsService {

    constructor(){
        this.dataMessage = "";
        this.errorFlag = true;
    }

    writeFileWithName(path="./", nameFile="debuggFail.txt", permis={ encoding: "UTF-8",flag: "a"}, data="-Test"){
        return new Promise((response, reject)=>{
            try {
                // if(flagError){
                //     fSystem.appendFile()
                // }

                const callback = (error)=>{
                    if(error){
                        this.dataMessage = "Error escribiendo archivo :P "+ JSON.stringify(error);
                        reject({"errorFlag": this.errorFlag, "dataMessage": this.dataMessage});
                    }else{
                        this.errorFlag = false;
                    }
                    response({"errorFlag": this.errorFlag, "dataMessage": this.dataMessage});
                }
                const pathWithFileName = `${path}${nameFile}`;
    
                fSystem.writeFile(pathWithFileName, data, permis, callback);
            } catch (error) {
                this.dataMessage = "Error escribiendo archivo :P "+ JSON.stringify(error);
                reject({"errorFlag": this.errorFlag, "dataMessage": this.dataMessage});
            }
        });
        // { encoding: "base64",flag: "a"},
        // flags url: https://stackoverflow.com/questions/27920892/in-fs-writefileoption-how-an-options-parameter-generally-work
    }

    fileExist(pathWithFileName){
        return new Promise( (resp, rejec)=>{
            try {
                fSystem.exists(pathWithFileName, (e)=>{
                    e ? this.dataMessage = e : this.errorFlag = false;

                    resp({"errorFlag": this.errorFlag, "dataMessage" : this.dataMessage});
                });
            } catch (error) {
                error => {
                    this.writeFileWithName(`${__dirname}../FilesDebbug/`,null,null,error);
                    rejec({"errorFlag": this.errorFlag, "dataMessage" : this.dataMessage = JSON.stringify(error)});
                }
            }
        });
    }

    readDataFile(path="", nameFile="dataDisplay.txt", appWithOpen="notepad.exe"){
        return new Promise((resolve, reject)=>{
            try {
                const callback= (error, contentData)=>{
                    if(error){
                        this.errorFlag = true; 
                        this.dataMessage = JSON.stringify(error);
                    }
                    if(contentData){
                        this.errorFlag = false; 
                        this.dataMessage = contentData;
                    }
                    resolve({"errorFlag":this.errorFlag,"dataMessage": this.dataMessage});
                }

                fSystem.readFile(path+nameFile, 'UTF-8', callback);
            } catch (error) {
                reject({"errorFlag":this.errorFlag,"dataMessage": error});
            }
        });
    }
}
module.exports = FileToolsService;