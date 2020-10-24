/**
 * Uma promise recebe dois parametros: "Resolve" e "Reject".
 * Apos a chamada de uma função que tenha promise, usar o "then()" para pegar o resultado. e cacth() para pegar os erros
 * Importante observar as chamadas, principalmente se as funções forem muito aninhada.
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

const obtendo = obterUsuario();

obtendo
    .then((usuario) => {
        return obterTelefone(usuario.id)
                .then((result) => {
                    return {
                        usuario: {
                            id: usuario.id,
                            nome: usuario.nome
                        },
                        telefone: result
                    }
                })
    })
    .then((resultado)=> {
        return obterEnderecoAsync(resultado.usuario.id)
                            .then(result =>{
                                return {
                                    usuario: resultado.usuario,
                                    telefone: resultado.telefone,
                                    endereco: result
                                }
                            })
    })
    .then((result) => {
        console.log('result: ', result)
    })
    .catch(error => console.log('erro: ', error))