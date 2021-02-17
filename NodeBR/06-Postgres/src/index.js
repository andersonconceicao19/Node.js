const ContextStrategy = require("./db/strategies/base/contextStrategy");
const postG = require('./db/strategies/postgresStrategy')

const contextPostgres = new ContextStrategy(new postG());
contextPostgres.create()
