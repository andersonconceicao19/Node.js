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
/**ROTA DE EDIÇÃO */
app.get('/edit/:id', function(req, res){
    Post.findByPk(req.params.id)
      .then(post => {
        res.render('form-edit', {
          id: req.params.id,
          titulo: post.titulo,
          conteudo: post.conteudo
        })
      })
      .catch(err => {
        res.send('Post não encontrado!')
      })
  })
  app.post('/editado/:id', function(req, res){
    Post.update({
      Titulo: req.body.titulo,
      Conteudo: req.body.conteudo
    },
    {
      where: { id: req.params.id }
    }).then(function(){
      res.redirect('/')
    }).catch(function(err){
      console.log(err);
    })
  })

/**Apontando servidor */
app.listen(8080, function(){
    console.log('Rodando');    
})