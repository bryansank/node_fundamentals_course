function main(){
    function asyncError(callback){
        setTimeout(()=>{
            try {
                let a = 3 +z;
                callback(null,a);
            } catch (error) {
                callback(error,null);
            }
        },3000)
    }

    
    asyncError((error, data)=>{
        if(error){//null == false
            console.log("ERROR DE CALLBACK")
            console.log(error)
            // throw error; En funciones ASINCRONAS NO funciona.
            // return false;
        }

        console.log("TODO GUCCHI", data)
    })
    
}

module.exports = {main}