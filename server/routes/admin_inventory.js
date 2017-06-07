

  var router = require('express').Router();
  var pg = require('pg');
  var nodemailer = require('nodemailer');
  var pool = require('../modules/database-config');
// sourcing dependancies
  DotEnv = require('dotenv-node');
  new DotEnv();



// inventory items or admin_inventory view
  router.get('/getFilteredInventory', function (req, res) {
  var inventoryFilter = req.headers;
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM iceRods WHERE model=$1", [inventoryFilter.inventoryfilter])
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });// end of .then
  });//end of router.get











  module.exports = router;
