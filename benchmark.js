function main(){

    console.time('Program')
        let suma = 0;

        console.time('bucle')

        for(let i = 0;  i <100000; i++){
            suma += 1;
        }

        console.timeEnd('bucle')

        console.time('Asincronia proceso')
            console.log('Se va a disparar function asincronia')
            asincrona().then(
                ()=>{console.log('termino asincronia!!!')}
            )
        console.timeEnd('Asincronia proceso')

        let suma2 = 0;

        console.time('bucle 2')

        for(let j = 0;  j <100000; j++){
            suma2 += 1;
        }

        console.timeEnd('bucle 2')


        function asincrona(){
            return new Promise( (res, rej)=>{
                setTimeout(() => {
                    console.log('termino el promise')
                    res();
                }, 3000);
            })
        }

    console.timeEnd('Program')
}

module.exports = {main}