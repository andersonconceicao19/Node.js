DROP TABLE IF EXISTS tb_herois;
-- CRIAR A TABELA
CREATE TABLE tb_herois(
    Id int generated always as identity primary key not null,
    Nome text not null,
    Poder text not null
)
--  CRIAR INSERÇÕES
INSERT INTO tb_herois (Nome, Poder)
VALUES 
        ('batman', 'dinheiro')

-- SELECIONAR TODAS AS TABELAS
SELECT * FROM tb_herois;

-- ATUALIZAR OS DADOS DAS TABELAS
UPDATE tb_herois
SET Nome = 'Gohan'
WHERE Id = 1

-- DELETAR UM REGISTO
DELETE FROM tb_herois
WHERE Id = 1;