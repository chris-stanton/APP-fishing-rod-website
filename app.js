
// sourcing dependancies
  DotEnv = require('dotenv-node');
  new DotEnv();
  var express = require('express');
  var app = express();
  var path = require('path');
  var bodyParser = require('body-parser');
  var decoder = require('./server/modules/decoder');
  var nodemailer = require('nodemailer');

// sourcing routes
  var order = require('./server/routes/order.js')

// Serve back static files
  app.use(express.static(path.join(__dirname, './public')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

// Handles index file separately
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '.public/index.html'));
  })

// routes
  app.use('/order', order);

// Decodes the token in the request header and attaches the decoded token to req.decodedToken on the request.
// Routes below the decoder.token must have token in request
app.use(decoder.token);




// port listening
  app.set('port', process.env.PORT || 5000);
  app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
  });
