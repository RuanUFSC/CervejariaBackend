// Importando a conexão com o banco de dados
const database = require('../database')

// Criando função que vai realizar a inserção de dados na tabela produto no banco de dados
exports.deleteProduct = (req, res) => {
  
  // Armazenando o comando SQL numa variável let
  const comando = `DELETE FROM produto WHERE produto_id = $1`;
  const valores = [req.params.produto_id];

  // Utilizando a instrução database.query do pacote pg para executar o comando no banco de dados
  database
    .query(comando, valores)
    .then((resultado) => {
        res.status(200).send(
            {
                message: `Produto ${req.params.produto_id} removido com sucoesso!`,
                data: resultado.rows 
            }
        );
    })
    .catch((erro) => {
      res.status(500).send({erro: erro});
    })
}