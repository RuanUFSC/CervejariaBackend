// Importando a conexão com o banco de dados
const database = require('../database')

// Criando função que vai realizar a criação da tabela no banco de dados
exports.createTable = (req, res) => {
  
  // Armazenando o comando SQL numa variável let
  const comando = `CREATE TABLE IF NOT EXISTS produto (
    produto_id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    preco NUMERIC(10,2) NOT NULL
  )`

  // Utilizando a instrução database.query do pacote pg para executar o comando no banco de dados
  database
    .query(comando)
    .then(() => {
      res.status(200).send({message: 'Tabela criada com sucoesso!'});
    })
    .catch((erro) => {
      res.status(500).send({erro: erro});
    })
    // res.status(200).send({message: 'Tabela criada com sucoesso!'});
}