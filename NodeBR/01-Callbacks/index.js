/**
 * O - Obter o usuario
 * 1 - Obter o endereço do usuario apartir do id
 * 2 - Obter o telefone do usuario apartir do id
 * 
 * usando o timeout para simular uma chamada numa api. Que as vezes pode demorar uns segundos.
 */

 function obterUsuario(callback) {
     
    setTimeout(() =>{
        return callback(null, {
            id: 1,
            nome: 'Anderson',
            nascido: new Date('7-19-1994')
        })
    }, 1000)
 }

 function obterTelefone(idUsuario, callback) {
    setTimeout(()=>{
        return callback(null, {
            ddd: 13,
            telefone: 996768787
        })
    }, 2000)
 }

 function obterEndereco(idUsuario, callback) {
    setTimeout(()=>{
        return callback(null, {
            rua: 10,
            cidade: 'Melborn'
        })
    }, 2000)
 }

 function resolverUsuario(error, usuario) {
    console.log('usuário: ', usuario);
 }

 // const usuario = obterUsuario(resolverUsuario); teste a chamada de uma func através de outra.
 obterUsuario(function resolverUsuario(error, usuario){
    if(error) {
        console.log('xii deu ruim no usuário!', error);
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1)
        {
            console.log('xii deu ruim no telefone', error1);
            return;
        }
        obterEndereco(usuario.id, function resolveEndereco(error2, endereco) {
            if(error2)
            {
                console.log('xii deu ruim no endereco', error2);
                return;
            }
            console.log(`nome: ${usuario.nome}, telefone: ${telefone.telefone}, em 2022 vai morar em ${endereco.cidade}`);
        })
    })
 })  
/*
* Ficaram funções aninhadas, e por vezes pode parecer confusas as chamadas.
* O código fica verboso demais.
*/