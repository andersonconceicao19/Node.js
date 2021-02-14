const assert = require('assert')
const { obterPessoas } = require('./service')
const nock = require('nock')
/* 
    * Descrevendo o que a switch de teste fará.
    * Cada item da switch é representado pelo "IT"
*/
describe('Consumindo api heroes', () => {

    beforeEach(()=>{
        const response = {
                    "count": 1,
                    "next": null,
                    "previous": null,
                    "results": [
                        {
                        "name": "R2-D2",
                        "height": "96",
                        "mass": "32",
                        "hair_color": "n/a",
                        "skin_color": "white, blue",
                        "eye_color": "red",
                        "birth_year": "33BBY",
                        "gender": "n/a",
                        "homeworld": "http://swapi.dev/api/planets/8/",
                        "created": "2014-12-10T15:11:50.376000Z",
                        "edited": "2014-12-20T21:17:50.311000Z",
                        "url": "http://swapi.dev/api/people/3/"
                        }
                    ]
          }

          /**
           * Toda vez que chamar a URL com get, usando como parametro o especificado.
           * comparar se está de acordo com o mackado, se sim, retornar um 200.
           */
          nock('https://swapi.dev/api/people')
                .get('/?search=R2-D2')
                .reply(200, response);
    })

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
