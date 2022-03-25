console.log("Hello world with Node. ");
let i = 0;

setInterval(()=>{
    console.log(i);
    i++;

    // Para generar un error...
    // if(i == 5){
    //     let a = 3 + z;
    // }
}, 1000);

console.log("Segunda instruccion, que se ejecutara, porque el event equeq sabe que lo puede resolver mas rapido que la funcion anterior.")