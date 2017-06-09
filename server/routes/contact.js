
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




// sends email from contact view
  router.post('/newMessage', function (req, res) {
    var newMessage = req.body;
    var mailOptions = {
      from: 'Rod Building Website ' + process.env.ACCOUNT_NAME,
      to: process.env.ACCOUNT_RECIEVER_EMAIL,
      subject: 'Customer Message',
      text: req.decodedToken.name,
      html: '<h5>' + 'firebaseUserId: ' + req.decodedToken.uid + '</h5>' +
            '<h5>' + 'Customer name: ' + newMessage.name + '</h5>' +
            '<h5>' + 'Customer Email: ' + newMessage.customerEmail + '</h5>' +
            '<h5>' + 'Subject: ' + newMessage.subject + '</h5>' +
            '<h5>' + 'Message: ' + newMessage.message + '</h5>'
    };// end var mailOptions
// sents email to reciever
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          return console.log(error);
            res.sendStatus(500);
        }
         console.log('Message %s sent: %s', info.messageId, info.response);
          res.sendStatus(201);
      });//end of transporter
  });// end router.post()






  module.exports = router;
