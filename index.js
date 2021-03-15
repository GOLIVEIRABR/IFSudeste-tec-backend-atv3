const express = require('express');

const app = express();
const port = 3000;
app.use(express.json()); //manipular json
const userRoute = require('./routes/users');

app.use('/users', userRoute);

app.get('/abc[0-9]d', (req, res) => {
  res.status(200).send("Essa é uma expressão regular.");
});

app.get('*', (req, res) => {
  res.status(404).send("Link inválido: 404");
})

app.listen(port, () => console.log(`Escutando na porta ${port}`));