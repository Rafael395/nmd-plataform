const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Backend da NMD!'));
app.listen(3001, () => console.log('Servidor rodando na porta 3001'));