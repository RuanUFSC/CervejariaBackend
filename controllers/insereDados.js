// Importando a conexão com o banco de dados
const database = require('../database')

// Criando função que vai realizar a inserção de dados na tabela produto no banco de dados
exports.insertProduct = (req, res) => {
  
  // Armazenando o comando SQL numa variável let
  const comando = `INSERT INTO produto(nome, preco, descricao) VALUES ($1, $2, $3)`;
  const valores = [req.body.nome, req.body.preco, req.body.descricao];

  // Utilizando a instrução database.query do pacote pg para executar o comando no banco de dados
  database
    .query(comando, valores)
    .then((resultado) => {
        res.status(200).send(
            {
                message: `Produto ${req.body.nome} inserido com sucoesso!`,
                data: resultado.rows 
            }
        );
    })
    .catch((erro) => {
      res.status(500).send({erro: erro});
    })
}