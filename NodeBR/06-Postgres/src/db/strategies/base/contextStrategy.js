const ICrud = require('./../interfaces/interfaceCrud')

class ContextStrategy extends ICrud {

    constructor(database) {
        super();
        this._database = database;
    }
    read(item){
        return this._database.read(item);
    }
    create(item){
        return this._database.create(item);
    }
    update(id, item){
        return this._database.update(id, item);
    }
    delete(id){
        return this._database.delete(id);
    }
    isConnected(){
        return this._database.isConnected();
    }
}

module.exports = ContextStrategy;