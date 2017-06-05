
var router = require('express').Router();
var pg = require('pg');
var nodemailer = require('nodemailer');
var pool = require('../modules/database-config');
// sourcing dependancies
DotEnv = require('dotenv-node');
new DotEnv();


// gets all ice rod models and specs on init for order view
  router.get('/getCart', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM iceRods FULL OUTER JOIN iceRodOrders ON iceRodOrders.blankModel=iceRods.model WHERE paid=false AND firebaseUserId=$1", [req.decodedToken.uid])
        .then(function (result) {
          client.release();
          res.send(result.rows);
        }).catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });// end of .then
  });//end of router.get

// upadtes cart at DB from cart view
  router.post('/updateCart/:id', function(req, res){
    var cartId = req.params.id
    var cart = req.body;
    console.log(cart.quantity);
    pool.connect()
      .then(function (client) {
        client.query("UPDATE iceRodOrders SET quantity=$1 WHERE id=$2;", [cart.quantity, cartId])
          .then(function (result) {
            client.release();
            res.sendStatus(200);
          }).catch(function (err) {
            console.log('error updating database:', err);
              res.sendStatus(500);
          });
      });// end of .then
  });// end router.put





  module.exports = router;
