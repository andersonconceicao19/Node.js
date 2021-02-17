const  ICrud  = require("./interfaces/interfaceCrud");

class PostgresStrategy extends ICrud {
    constructor(){
        super();
    }
    isConnected(){

    }
    connect()
    create(item) {
       console.log('Olá, Postgres')
    }
}

module.exports = PostgresStrategy;