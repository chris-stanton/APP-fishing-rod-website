

  var router = require('express').Router();
  var pg = require('pg');
  var nodemailer = require('nodemailer');
  var pool = require('../modules/database-config');
// sourcing dependancies
  DotEnv = require('dotenv-node');
  new DotEnv();





// upadtes cart at DB from cart view
  router.post('/updateInventory/:id', function(req, res){
    var inventoryItemId = req.params.id
    var inventoryItem = req.body;
    pool.connect()
      .then(function (client) {
        client.query("UPDATE iceRods SET model=$1, blankLength=$2, handleMaterial=$3, handleLength=$4, image=$5, price=$6, description=$7, active=$8 WHERE id=$9",
        [inventoryItem.model, inventoryItem.blanklength, inventoryItem.handlematerial, inventoryItem.handlelength, inventoryItem.image, inventoryItem.price, inventoryItem.description, inventoryItem.active, inventoryItemId])
          .then(function (result) {
            client.release();
            res.sendStatus(200);
          }).catch(function (err) {
            console.log('error on updating cutsomer database:', err);
              res.sendStatus(500);
          });
      });// end of .then
  });// end router.put



// inventory items or admin_inventory view
  router.get('/getFilteredInventory', function (req, res) {
  var inventoryFilter = req.headers;
  pool.connect()
    .then(function (client) {
      client.query("SELECT * FROM iceRods WHERE active=$1", [inventoryFilter.inventoryfilter])
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
