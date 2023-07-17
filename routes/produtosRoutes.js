const express = require('express');
const router = express.Router();
const controllerCriacao = require('../controllers/criaTabela');
const controllerConsulta = require('../controllers/consultaDados');
const controllerInsercao = require('../controllers/insereDados');
const controllerExclusao = require('../controllers/apagaDados');
const controllerAtualizacao = require('../controllers/atualizaDados');

router.post('/criar-tabela', controllerCriacao.createTable);
router.get('/consultar-produtos', controllerConsulta.getProducts);
router.post('/criar-produto', controllerInsercao.insertProduct);
router.delete('/apagar-produto/:produto_id', controllerExclusao.deleteProduct);
router.put('/atualizar-produto/:produto_id', controllerAtualizacao.updateProduct);

module.exports = router;