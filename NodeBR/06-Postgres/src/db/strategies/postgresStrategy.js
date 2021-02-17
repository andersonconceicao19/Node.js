const  ICrud  = require("./interfaces/interfaceCrud");
const Sequelize = require('sequelize');



class PostgresStrategy extends ICrud {
    constructor(){
        super();
        this._driver = null;
        this._herois = null;
        this.connect();
    }
    // Método para verificar se o banco está conectado.
    isConnected(){
        try {
                this._driver.authenticate();
        } catch (error) {
            console.log('fail! ',error)
        }
    }

    // Método para definir o modelo

    defineModel(){
        this._herois = driver.define('herois', {
            id: {
                type: Sequelize.INTEGER,
                required: true,
                primaryKey: true,
                autoIncrement: true
            }, 
            nome: {
                type: Sequelize.STRING,
                required: true
            }, 
            poder: {
                type: Sequelize.STRING,
                required: true
            }
        },
        {
            tableName: 'tb_herois',
            freezeTableName: false,
            timestamps: false
        })
    
        this._herois.sync();
    }


    // Método para conexão com o banco de dados, usando drivers
    connect() {
        _driver = new Sequelize(
           'heroes',
           'anderson',
           'minhaSenha', {
               host: 'localhost',
               dialect: 'postgres',
               quoteIdentifiers: false,
               operatorsAliases: false
           }
        )        
    }

    // Método de criação de algo
    create(item) {
       console.log('Olá, Postgres')
    }
}

module.exports = PostgresStrategy;