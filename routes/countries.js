const express = require('express');
const CountriesController = require('../controllers/countries');
const app = express();

app.get('/', CountriesController.getCountries);

module.exports = app;
