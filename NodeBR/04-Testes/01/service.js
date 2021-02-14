const { 
    get 
} = require('axios');

const URL = ' https://swapi.dev/api/people'

//função de serviço para chamar as pessoas especifica
async function obterPessoas(name){
    const url = `${URL}/?search=${name}&format=json`
    const result = await get(url)
    return result.data
}

module.exports = {
    obterPessoas
}