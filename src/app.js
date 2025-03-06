const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World');
});
