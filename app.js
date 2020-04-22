'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongoCON = require('./config/config').CON;
const countryRoutes = require('./routes/countries')
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connection.openUri( mongoCON, { useNewUrlParser: true }, (err, res) => { 
  if (err) throw err;
  console.log('Mongo port 27017: \x1b[32m%s\x1b[0m', 'online');
})

app.use('/countries', countryRoutes);
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server port 3000: \x1b[32m%s\x1b[0m', 'online');
})

module.exports = app
