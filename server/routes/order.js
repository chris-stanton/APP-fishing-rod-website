
  var router = require('express').Router();
  var pg = require('pg');
  var pool = require('../modules/database-config');


// gets all ice rod models and specs on init for order view
  router.get('/allIceRods', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM iceRods")
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
