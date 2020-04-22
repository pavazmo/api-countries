var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema({
    type: { type: String},
    geometry: {
        type: {type: String},
        coordinates: {type: Array}
    },
    properties: {
        country: { type: String, index: { unique: true } },
        name: { type: String }
    }
});

module.exports = mongoose.model('Countrie', countrySchema); 