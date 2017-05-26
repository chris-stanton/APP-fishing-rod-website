
  var router = require('express').Router();
  var pg = require('pg');
  var pool = require('../modules/database-config');




// adds user's address to DB
  router.post('/newUserAddress', function (req, res) {
    var newUserAddress = req.body;
    pool.connect()
      .then(function (client) {
        client.query('INSERT INTO customers (firstname, lastname, streetaddress, city, state, zipcode, firebaseuserid) VALUES ($1, $2, $3, $4, $5, $6, $7)',
          [newUserAddress.firstName, newUserAddress.lastName, newUserAddress.streetAddress, newUserAddress.city, newUserAddress.state, newUserAddress.zipCode, newUserAddress.firebaseUserId])
          .then(function (result) {
            client.release();
            res.sendStatus(201);
          })
          .catch(function (err) {
            console.log('error on INSERT', err);
            res.sendStatus(500);
          });
      });//end of .then
  });//end of router.post

// adds ice rod orders to DB
  // router.post('/addIceRodOrder', function (req, res) {
  //   var newUserAddress = req.body;
  //   pool.connect()
  //     .then(function (client) {
  //       client.query('INSERT INTO iceRodOrders (firebaseuserid, blankmodel, blankLength, handlematerial, handlelength, guides, threadcolormain, threadcolortrim) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
  //         [newUserAddress.firebaseUserId, newUserAddress.blankModel, newUserAddress.blankLength, newUserAddress.handleMaterial, newUserAddress.handleLength, newUserAddress.guides, newUserAddress.threadColorMain, newUserAddress.threadColorTrim])
  //         .then(function (result) {
  //           client.release();
  //           res.sendStatus(201);
  //         })
  //         .catch(function (err) {
  //           console.log('error on INSERT', err);
  //           res.sendStatus(500);
  //         });
  //     });//end of .then
  // });//end of router.post






  module.exports = router;
