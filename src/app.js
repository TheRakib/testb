const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'This REST api will translate into Rövarspråk, look into /translate endpoint',
  });
});

app.use('/translate', api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
