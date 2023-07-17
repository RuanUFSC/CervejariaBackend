// Importando a conexão com o banco de dados
const database = require('../database')

// Criando função que vai realizar a inserção de dados na tabela produto no banco de dados
exports.updateProduct = (req, res) => {
  
  // Armazenando o comando SQL numa variável let
  const comando = `
    UPDATE produto 
    SET nome = $1, preco = $2, descricao = $3 
    WHERE produto_id = $4`;

  const valores = [
      req.body.nome, 
      req.body.preco,
      req.body.descricao,
      req.params.produto_id
  ];

  // Utilizando a instrução database.query do pacote pg para executar o comando no banco de dados
  database
    .query(comando, valores)
    .then((resultado) => {
        res.status(200).send(
            {
                message: `Produto ${req.body.nome} atualizado com sucoesso!`,
                data: resultado.rows 
            }
        );
    })
    .catch((erro) => {
      res.status(500).send({erro: erro});
    })
}