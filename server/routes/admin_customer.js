
var router = require('express').Router();
var pg = require('pg');
var nodemailer = require('nodemailer');
var pool = require('../modules/database-config');
// sourcing dependancies
DotEnv = require('dotenv-node');
new DotEnv();



// upadtes cart at DB from cart view
  router.post('/updateCustomer/:id', function(req, res){
    var customerId = req.params.id
    var customer = req.body;
    pool.connect()
      .then(function (client) {
        client.query("UPDATE customers SET firstName=$1, lastName=$2, streetAddress=$3, city=$4, state=$5, zipCode=$6, firebaseUserId=$7, image=$8, email=$9, notes=$10, active=$11 WHERE id=$12",
        [customer.firstname, customer.lastname, customer.streetaddress, customer.city, customer.state, customer.zipcode, customer.firebaseuserid, customer.image, customer.email, customer.notes, customer.active, customerId])
          .then(function (result) {
            client.release();
            res.sendStatus(200);
          }).catch(function (err) {
            console.log('error on updating cutsomer database:', err);
              res.sendStatus(500);
          });
      });// end of .then
  });// end router.put








  module.exports = router;
