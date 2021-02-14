const assert = require('assert')
const { obterPessoas } = require('./service')

/* 
    * Descrevendo o que a switch de teste fará.
    * Cada item da switch é representado pelo "IT"
*/
describe('Consumindo api heroes', () => {
    //Primeiro switch 
    it('Buscando o R2D2 no formato correto', async  () => {
        // Resultado esperado da api
        const expectativa = [{
            nome: 'R2-D2', 
            peso: '96'
        }]
        // Nome mochado
        const nomeBase = 'R2-D2'  
        //buscando o resultado da api, com base no nome mochadk   
        const resultado = await obterPessoas(nomeBase);
        
        // Comparando se o resultado que a api trouxe, é similar ao experado.
        assert.deepEqual(resultado, expectativa);
        
    })
})
