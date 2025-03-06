const express = require('express');
const routes = require('./routes');
const app = express();

const LoggerMiddleware = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use(LoggerMiddleware);
app.use(errorHandler);

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;
