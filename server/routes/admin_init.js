
var router = require('express').Router();
var pg = require('pg');
var nodemailer = require('nodemailer');
var pool = require('../modules/database-config');
// sourcing dependancies
DotEnv = require('dotenv-node');
new DotEnv();


// selected inventory items for select options on init for admin_inventory view
  router.get('/getSelectOptions', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT model FROM iceRods ORDER BY model ASC")
        .then(function (result) {
          client.release();
          res.send(result.rows)
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });// end of .then
  });//end of router.get

// all inventory items for admin inventory view
  router.get('/getAllInventory', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM iceRods")
        .then(function (result) {
          client.release();
          res.send(result.rows)
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });// end of .then
  });//end of router.get

// gets customers for admin customer view
  router.get('/getAllCustomers', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM customers ORDER BY lastName DESC")
        .then(function (result) {
          client.release();
          res.send(result.rows)
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });// end of .then
  });//end of router.get






  module.exports = router;
