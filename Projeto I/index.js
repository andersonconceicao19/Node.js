const express = require('express')
const app = express()
const handlebars = require('express-handlebars') // instanciando handlebars
const bodyparser = require('body-parser')
const Post = require('./models/post')



/** templete Engine */

app.engine('handlebars', handlebars({defaultLayout: 'main'})) //apontando layout
app.set('view engine', 'handlebars')

/**body parser configurando */
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())


/**Rotas */
app.get('/', function(req, res){
    Post.findAll().then(function(pos){
        res.render('home', {post: pos})
    })
app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/')
    })
})
            
    
})

app.get('/cad', function(req, res){
    res.render('cadastro')
})
app.post('/confirma', function(req, res){
    Post.create({
        Titulo: req.body.titulo,
        Conteudo: req.body.conteudo
    }).then(()=> res.redirect('/')).catch((err)=> res.send('erro no: '+ err))
})


/**Apontando servidor */
app.listen(8080, function(){
    console.log('Rodando');    
})