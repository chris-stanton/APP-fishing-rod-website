
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




// sends email from career view
  router.post('/application', function (req, res) {
    var application = req.body;
    var mailOptions = {
      from: 'Rod Building Website ' + process.env.ACCOUNT_NAME,
      to: process.env.ACCOUNT_RECIEVER_EMAIL,
      subject: 'Job Application',
      text: req.decodedToken.name,
      html: '<h5>' + 'firebaseUserId: ' + req.decodedToken.uid + '</h5>' +
            '<h5>' + 'Applicant First Name: ' + application.firstName + '</h5>' +
            '<h5>' + 'Applicant Last Name: ' + application.lastName + '</h5>' +
            '<h5>' + 'Applicant Phone Number: ' + application.phoneNumber + '</h5>' +
            '<h5>' + 'Applicant Email: ' + application.email + '</h5>' +
            '<h5>' + 'Applicant Birthday: ' + application.birthday + '</h5>' +
            '<h5>' + 'Position Appling For: ' + application.position + '</h5>' +
            '<h5>' + 'Bio: ' + application.bio + '</h5>' +
            '<h5>' + 'comments: ' + application.comments + '</h5>'
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
