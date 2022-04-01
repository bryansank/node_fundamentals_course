class ProductsService{
    constructor(){
        this.productos = [];
    }

    generateProducts(){
        for (let index = 0; index < limit; index++) {
        productos.push({name: faker.name.firstName(), pricd: parseInt(faker.commerce.price(), 10), iamge: faker.image.imageUrl() });
        }
    }

    cerrarArchivoLector(app=""){
        // taskkill //f //im notepad.exe //T
    }

}

module.exports = ProductsService;