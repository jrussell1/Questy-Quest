
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/items", function(req, res) {
   
    db.Items.findAll({}).then(function(dbResponse) {
      res.json(dbResponse);
        // res.render("items",dbResponse);
    });
  });

  // Get route for retrieving a single Items
  app.get("/api/getitem/:name", function(req, res) {

    db.Items.findOne({
      where: {
        itemName: req.params.name
      }
    }).then(function(dbResponse) {
      res.json(dbResponse);
    });
  });


  app.post("/api/itemcreate", function(req, res) {
    db.Items.create(
      {
        itemName: req.body.itemName,
      itemDescription: req.body.itemDescription,
      itemEffect: req.body.itemEffect,
      itemStats: req.body.itemStats
        
      }
    
    ).then(function(dbData) {
        res.json(dbData);
      });
  });



};
