// Importando a conexão com o banco de dados
const database = require('../database')

// Criando função que vai realizar a consulta na tabela produto no banco de dados
exports.getProducts = (req, res) => {
  
  // Armazenando o comando SQL numa variável let
  const comando = `SELECT * FROM produto`

  // Utilizando a instrução database.query do pacote pg para executar o comando no banco de dados
  database
    .query(comando)
    .then((resultado) => {
        res.status(200).send(
            {
                message: 'Dados consultados com sucoesso!',
                data: resultado.rows 
            }
        );
    })
    .catch((erro) => {
      res.status(500).send({erro: erro});
    })
}