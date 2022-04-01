// Recordando que el buffer esta TODO en MEMORIA RAM
function main(){
    // let buffer = Buffer.alloc(1);
    let buffer = Buffer.from([1,2,3,4,5]);
    console.log(buffer)

    let abc = Buffer.alloc(26)
}

module.exports = {main}