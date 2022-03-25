function main(){
    const puper = require('puppeteer');

    // Funcion autoejecuitada.... 
    ( async ()=>{
        console.log("Lanzamos Navegador...");
        const browser = await puper.launch( {headless: false} );

        const page = await browser.newPage();
        await page.goto('https://es.wikipedia.org/wiki/Node.js');

        let titulo1 = await page.evaluate( ()=>{
            const h1 = document.querySelector('h1');
            console.log(h1.innerHTML);
            return h1.innerHTML;
        });

        console.log(titulo1);

        console.log("Cerramos Navegador.");
        browser.close();
        console.log("Navegador Cerrado.");
    })();
}

module.exports = {main}