const resp = require('../config/res');
const Countries = require('../models/countries');

function getCountries(req, res) {
    var longitude = req.query.longitude;
    var latitude = req.query.latitude;

    Countries.find({
        geometry: {
           $near: {
             $geometry: {
                type: "Point" ,
                coordinates: [ longitude, latitude ]
             },
           }
         }
      }).limit(3).exec((err, ctrs) => {

        if (err) {
          return resp.error400( err, res );
        }

        let filteredCountries = ctrs.map(country => country.properties);
        resp.OK200(filteredCountries,res);
    });


}

exports.getCountries = getCountries;

  