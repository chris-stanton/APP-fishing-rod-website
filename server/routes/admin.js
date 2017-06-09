
  var router = require('express').Router();
  var pg = require('pg');
  var nodemailer = require('nodemailer');
  var pool = require('../modules/database-config');
// sourcing dependancies
  DotEnv = require('dotenv-node');
  new DotEnv();



// checks for admin rights on init
  router.get('/checkAdminRights', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT firebaseUserId FROM admin WHERE firebaseUserId=$1", [req.decodedToken.uid])
        .then(function (result) {
          client.release();
          // res.send(result.rows)
          var result = result.rows;
          for (var i = 0; i < result.length; i++) {
            var adminId = result[i].firebaseuserid;
          }
            if (adminId == req.decodedToken.uid) {
              res.send(true);
            } else {
              res.send(false);
            };
        }).catch(function (err) {
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });// end of .then
  });//end of router.get

// checks for new user on init
  router.get('/checkNewUser', function (req, res) {
  pool.connect()
    .then(function (client) {
      client.query("SELECT firebaseUserId FROM customers WHERE firebaseUserId=$1", [req.decodedToken.uid])
        .then(function (result) {
          client.release();
            var result = result.rows;
            for (var i = 0; i < result.length; i++) {
              var newUserId = result[i].firebaseuserid;
              }
                if (newUserId == req.decodedToken.uid) {
                  res.send(false);
                } else {
                  res.send(true);
                };
          }).catch(function (err) {
            console.log('error on SELECT', err);
            res.sendStatus(500);
          });
    });// end of .then
  });//end of router.get






  module.exports = router;
