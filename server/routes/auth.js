
  var router = require('express').Router();
  var pg = require('pg');
  var nodemailer = require('nodemailer');
  var pool = require('../modules/database-config');
// sourcing dependancies
  DotEnv = require('dotenv-node');
  new DotEnv();
// create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: process.env.ACCOUNT_NAME,
        pass: process.env.ACCOUNT_PASSWORD
    }
  });



// adds user's address to DB
  router.post('/newUserAddress', function (req, res) {
    var newUserAddress = req.body;
    pool.connect()
      .then(function (client) {
        client.query('INSERT INTO customers (firstname, lastname, streetaddress, city, state, zipcode, firebaseuserid) VALUES ($1, $2, $3, $4, $5, $6, $7)',
          [newUserAddress.firstName, newUserAddress.lastName, newUserAddress.streetAddress, newUserAddress.city, newUserAddress.state, newUserAddress.zipCode, req.decodedToken.uid])
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
  router.post('/newOrder', function (req, res) {
    var newOrder = req.body;
    console.log(req.decodedToken);
    pool.connect()
      .then(function (client) {
        client.query('INSERT INTO iceRodOrders (firebaseuserid, blankmodel, blankLength, handlematerial, handlelength, guides, threadcolormain, threadcolortrim) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
          [req.decodedToken.uid, newOrder.blankModel, newOrder.blankLength, newOrder.handleMaterial, newOrder.handleLength, newOrder.guides, newOrder.threadColorMain, newOrder.threadColorTrim])
          .then(function (result) {
            client.release();
            res.sendStatus(201);
// building email to be sent
            var mailOptions = {
              from: 'Personal Website ' + process.env.ACCOUNT_NAME,
              to: process.env.ACCOUNT_RECIEVER_EMAIL,
              subject: 'Email Rod Building Website',
              text: newOrder.firebaseUserId,
              html: '<h5>' + 'firebaseUserId: ' + req.decodedToken.uid + '</h5>' +
                    '<h5>' + 'Google Display Name: ' + req.decodedToken.name + '</h5>' +
                    '<h5>' + 'Customer Email: ' + req.decodedToken.email + '</h5>' +
                    '<h5>' + 'Blank Model: ' + newOrder.blankModel + '</h5>' +
                    '<h5>' + 'Blank Length: ' + newOrder.blankLength + '"' + '</h5>' +
                    '<h5>' + 'Handle Material: ' + newOrder.handleMaterial + '<h5>' +
                    '<h5>' + 'Handle Length: ' + newOrder.handleLength + '"' + '<h5>' +
                    '<h5>' + 'Guides: ' + newOrder.guides + '<h5>' +
                    '<h5>' + 'Thread Color Main: ' + newOrder.threadColorMain + '<h5>' +
                    '<h5>' + 'Thread Color Trim: ' + newOrder.threadColorTrim + '<h5>'
            };// end var mailOptions
// sents email to reciever
            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                return console.log(error);
              }
              console.log('Message %s sent: %s', info.messageId, info.response);
            });//end of transporter
          })// end .then
          .catch(function (err) {
            console.log('error on INSERT', err);
            res.sendStatus(500);
          });
      });//end of .then
  });//end of router.post






  module.exports = router;
