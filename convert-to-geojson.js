const GeoJSON = require('geojson');
const MongoClient = require('mongodb').MongoClient;
const neatCsv = require('neat-csv');
const fs = require('fs')
const url = 'mongodb://localhost:27017/';

fs.readFile('./countries.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  var data = await neatCsv(data);
  var jsonData = GeoJSON.parse(data, {Point: ['latitude', 'longitude']})
  var countries = jsonData.features;

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db('guruwalk-test');
    dbo.collection('countries').insert(countries, function(err, res) {
        if (err) throw err;
        console.log('Countries inserted');
    });

    dbo.collection('countries').createIndex({geometry:"2dsphere"}, function(err,res){
        if (err) throw errr;
        console.log('Index created')
        db.close();
    });
  
  });
})