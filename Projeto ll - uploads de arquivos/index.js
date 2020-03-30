const express = require('express');
const multer = require('multer');
const Path = require('path')
const app = express();

/**configurando o templete engine para mostrar no backEnd.
 * Futuramente será aplicado o Front em React(Ou outro Framework de front)
 */
app.set('view engine', 'ejs'); 

/**O multer tem uma função chamada diskStorage que configura a intermediação das requisições. */
const storage = multer.diskStorage({
    destination: function(request, file, callback){ /**Configurando onde será colocado o uploads */
        callback(null, "uploads/");
    },
    filename: function(request, file, callback){
        callback(null, file.originalname + Date.now() + Path.extname(file.originalname)) 
        /**Definindo/Configurando como será armazenado no banco de dados o arquivo recebido */
    }
})



const upload = multer({storage})/**O multer funciona como intermediario entre as requisições
                                    * Ela faz a transição do front para o caminho desejado no back
                                    * No exemplo, está recendo uma função, contudo da para passar só o dest (pasta) */

app.get('/',(request, response) => response.render('index'))

                /*Incluindo de onde está vindo o arquivo a ser carregado*/
app.post('/upload', upload.single('arquivo'), (request, response) => response.send("Arquivo enviado!") )

app.listen(3333)