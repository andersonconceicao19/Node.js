const Sequelize = require('sequelize')
/**Conectando com o banco*/

const sequelize = new Sequelize('dbPosts', 'root', 'admin',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports ={
    Sequelize: Sequelize,
    sequelize: sequelize
}