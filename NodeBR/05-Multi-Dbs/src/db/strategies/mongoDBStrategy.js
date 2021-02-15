const  ICrud  = require("./interfaces/interfaceCrud");

class MongoStrategy extends ICrud {
    constructor(){
        super();
    }
    create(item) {
       console.log('Olá, MongoDb')
    }
}

module.exports = MongoStrategy;