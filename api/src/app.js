const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const {mongoose} = require('./db')

const app = express();

const cors = require('cors');
app.use(cors());

app.use(morgan('dev'));
app.use(express.json());
app.use('/', routes);

module.exports = app;