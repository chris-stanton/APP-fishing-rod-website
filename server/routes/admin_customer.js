
var router = require('express').Router();
var pg = require('pg');
var nodemailer = require('nodemailer');
var pool = require('../modules/database-config');
// sourcing dependancies
DotEnv = require('dotenv-node');
new DotEnv();


// gets all ice rod models and specs on init for order view
  // router.get('/getCart', function (req, res) {
  // pool.connect()
  //   .then(function (client) {
  //     client.query("SELECT * FROM iceRods FULL OUTER JOIN iceRodOrders ON iceRodOrders.model=iceRods.model WHERE paid=false AND firebaseUserId=$1", [req.decodedToken.uid])
  //       .then(function (result) {
  //         client.release();
  //         res.send(result.rows);
  //       }).catch(function (err) {
  //         console.log('error on SELECT', err);
  //         res.sendStatus(500);
  //       });
  //   });// end of .then
  // });//end of router.get

// upadtes cart at DB from cart view
  router.post('/updateCustomer/:id', function(req, res){
    var customerId = req.params.id
    var customer = req.body;
    pool.connect()
      .then(function (client) {
        client.query("UPDATE customers SET firstName=$1, lastName=$2, streetAddress=$3, city=$4, state=$5, zipCode=$6, firebaseUserId=$7, image=$8, email=$9, notes=$10 WHERE id=$11",
        [customer.firstname, customer.lastname, customer.streetaddress, customer.city, customer.state, customer.zipcode, customer.firebaseuserid, customer.image, customer.email, customer.notes, customerId])
          .then(function (result) {
            client.release();
            res.sendStatus(200);
          }).catch(function (err) {
            console.log('error updating database:', err);
              res.sendStatus(500);
          });
      });// end of .then
  });// end router.put

// deleted items at DB from cart view
  router.delete('/deleteCart/:id', function(req, res) {
    var cartId = req.params.id;
    pool.connect()
      .then(function (client) {
        client.query('DELETE FROM iceRodOrders WHERE id=$1',
          [cartId])
          .then(function (result) {
            client.release();
            res.sendStatus(200);
        })
        .catch(function (err) {
            console.log('error on Delete', err);
            res.sendStatus(500);
        });
    });
  });







  module.exports = router;
