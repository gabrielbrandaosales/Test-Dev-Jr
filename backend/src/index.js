const express = require('express');
const { product } = require('./routes');

const cors = require('cors');

const app = express();

const corsOptions = {
  origin: '*', // Substitua pelo seu site
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Habilita o envio de cookies na solicitação (se necessário)
};

app.use(cors(corsOptions));

app.use('/product', product);

app.get('/', (_res, res) => {
  return res.status(200).send('Developed by Summer Comunicacao');
});

const PORT = 3001 || process.env.API_PORT;
app.listen(PORT, () => {
  console.log(`Application running at localhost:${PORT}`);
});
