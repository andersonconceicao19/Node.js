const ContextStrategy = require("./db/strategies/base/contextStrategy");
const postG = require('./db/strategies/postgresStrategy')
const mongoD = require('./db/strategies/mongoDBStrategy')

const contextPostgres = new ContextStrategy(new postG());
contextPostgres.create()

const contextMongoD = new ContextStrategy(new mongoD());
contextMongoD.create()