const resp = require('../config/res');

function getCountries(req, res) {
   resp.OK200("data",res);
}

exports.getCountries = getCountries;

  