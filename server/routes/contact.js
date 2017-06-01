
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













  module.exports = router;
