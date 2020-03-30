const banco = require('./banco')

const Post = banco.sequelize.define('postagens', {
    Titulo: {
        type: banco.Sequelize.TEXT
    },
    Conteudo:{
        type: banco.Sequelize.TEXT
    }

})
//Post.sync({force: true}) comentar depois da criação do banco
module.exports = Post;