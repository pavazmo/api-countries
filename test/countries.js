
const mongoose = require('mongoose');
const Countries = require('../models/countries');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();

// allow us to make http requests to our server
chai.use(chaiHttp)

describe('/GET countries', () => {
    it('it should GET all the countries', (done) => {
      chai.request(server)
      .get('/countries')
      .end((err, res) => {
         console.log(res)
         res.should.have.status(200);
        //res.body.should.be.a('array');
        //res.body.length.should.be.eql(0);
        // call done when test is over
      done();
      });
    });
  });