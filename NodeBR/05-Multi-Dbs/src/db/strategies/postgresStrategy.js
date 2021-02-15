const  ICrud  = require("./interfaces/interfaceCrud");

class PostgresStrategy extends ICrud {
    constructor(){
        super();
    }
    create(item) {
       console.log('Olá, Postgres')
    }
}

module.exports = PostgresStrategy;