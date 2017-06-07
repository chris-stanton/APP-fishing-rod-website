

  var express = require('express');
  var app = express();
  var path = require('path');
  var bodyParser = require('body-parser');
  var decoder = require('./server/modules/decoder');


// sourcing routes
  var order = require('./server/routes/order.js');
  var cart = require('./server/routes/cart.js');
  var contact = require('./server/routes/contact.js');
  var career = require('./server/routes/career.js');
  var auth = require('./server/routes/auth.js');
  var admin = require('./server/routes/admin.js');

  var admin_init = require('./server/routes/admin_init.js');
  var admin_inventory = require('./server/routes/admin_inventory.js');

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
  app.use('/admin_init', admin_init);

// Decodes the token in the request header and attaches the decoded token to req.decodedToken on the request.
// Routes below the decoder.token must have token in request
  app.use(decoder.token);

  // client side routes
  app.use('/contact', contact);
  app.use('/career', career);
  app.use('/auth', auth);
  app.use('/cart', cart);
  app.use('/admin', admin);
  // server side routes
  app.use('/admin_inventory', admin_inventory);




// port listening
  app.set('port', process.env.PORT || 5000);
  app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
  });
