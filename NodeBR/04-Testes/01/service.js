const { 
    get 
} = require('axios');

const URL = ' https://swapi.dev/api/people'

//função de serviço para chamar as pessoas especifica
async function obterPessoas(name){
    const url = `${URL}/?search=${name}&format=json`
    const result = await get(url)
    return result.data.results.map(mapearPessoas);
}

/*
    Método usado para filtrar apenas o que deseja da API
    No formato correto.
*/
 function mapearPessoas(item)
{
    return {
        nome: item.name,
        peso: item.height
    }
}

module.exports = {
    obterPessoas
}