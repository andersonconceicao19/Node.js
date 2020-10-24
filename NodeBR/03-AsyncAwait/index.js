/**
 * Async Await deixa o código limpo, além de ser legivel a quem não fez o código
 * Importante notar que todas as chamadas que ocorreram, foi em promises.
 * Quando testado sem uma promise, o programa deu erro. 
 */
 // A lib do node "util", trás o método de conversão de funções de callback para Promise, conforme abaixo
 const util = require('util')

 // abaixo
 const obterEnderecoAsync = util.promisify(obterEndereco)
 
 function obterUsuario() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             return resolve({
                 id: 1,
                 nome: 'Anderson',
                 nascido: new Date('7-19-1994')
             })
         }, 1000)
     })
 }
 
 function obterTelefone(idUsuario) {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             return resolve({
                 ddd: 13,
                 telefone: 996768787
             })
         }, 1000)
     })
 }
 
 function obterEndereco(idUsuario, callback) {
     setTimeout(() => {
         return callback(null, {
             rua: 10,
             cidade: 'Melborn'
         })
     }, 2000)
 }
 
 async function main() {
    try {
        
    console.time('medida-tempo');
    const user = await obterUsuario();

    const result = await Promise.all([
        obterEnderecoAsync(user.id),
        obterTelefone(user.id)
    ])
    const telefone = result[1];
    const endereco = result[0];
    console.log(`
        Nome: ${user.nome}.
        Nascido em: ${user.nascido}.
        Contato fake: ${telefone.telefone}.
        Deseja morar em: ${endereco.cidade}
    `)

    console.timeEnd('medida-tempo');    
        
    } catch (error) {   
        console.log('error: ', error);        
    }
 }
 main();