# Criando imagem do POSTGRES NO DOCKER

            ## docker run --name postgres -e POSTGRES_USER=anderson -e POSTGRES_PASSWORD=minhaSenha -e POSTGRES_DB=heroes -p 5432:5432  -d postgres


Linkando o administrador a um Administrador. Apontano a porta que se deve ouvir. 
    No localhost:8080 = Vai abrir uma interface para manipulação

            ## docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer



## Criando imagem MONGODB NO DOCKER
            ## docker run --name mongodb -e MONGO_INITDB_ROOT_USER=admin -e MONGO_INITDB_ROOT_PASSWORD=minhaSenha -p 27017:27017  -d mongo:4

Linkando o administrador a um Administrador. Apontano a porta que se deve ouvir. 
    No localhost:8080 = Vai abrir uma interface para manipulação
            ## docker run --name mongoClient -p 3000:3000 --link mongodb:mongodb -d mongoClient/mongoClient

Criando usuario de escrita e leitura no mongo, através de linha de comando.

        ## docker exec -it mongodb
            mongo --host localhost -u admin -p minhaSenha --authenticationDataBase admin 
            --eval "db.getSiblingDB('herois').createUser({user: 'andersonConceicao', pwd: 'minhaSenhaAnderson', roles: [{role: 'readWrite', db: 'herois' }]})"