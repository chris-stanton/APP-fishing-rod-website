
  var router = require('express').Router();
  var pg = require('pg');
  var pool = require('../modules/database-config');


// gets all ice rod models and specs on init for order view
  router.get('/allIceRods', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM iceRods ORDER BY model DESC")
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });//end of .then
  });//end of router.get

// gets all thread color on init for custom_order view options
  router.get('/getThread', function (req, res) {
    pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM threads")
        .then(function (result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });//end of .then
  });//end of router.get

// gets specific rod for specific_rod view
  router.get('/getSpecificIceRod/:id', function (req, res) {
    var rods = req.params;
    pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM iceRods WHERE id=$1", [rods.id])
        .then(function (result) {
         client.release();
          res.send(result.rows);
        })
        .catch(function (err) {
         console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });//end of .then
  });//end of router.get





module.exports = router;
