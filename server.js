const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const produtoRoutes = require('./routes/produtosRoutes')

const app = express();
app.use(bodyParser.json());

app.use("/produtos", produtoRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});