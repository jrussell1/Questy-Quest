var db = require("../models");
var Sequelize = require("sequelize");

module.exports = function(app) {
  // Get all examples
  app.get("/api/player", function(req, res) {

    db.Players.findAll({ order: Sequelize.literal('rand()'), limit: 1})
    
    
    .then((dbData => {
      res.json(dbData)
  }))
});


  // Create a new example
  app.post("/api/playercreate", function(req, res) {
    db.Players.create(
      {
        playerName:req.body.name,
        playerAttack: req.body.playerAttack,
        playerHp: req.body.playerHp,
        playerType:req.body.playerType
    }

    ).then(function(dbData) {
        res.json(dbData);
      });
  });

  app.get("/username", function(req,res){

    db.User.findOne({
      where: {
          email: req.body.email
      }
  }).then(function(dbResponse) {
      res.json("dbResponse");
       console.log("-----------------------------");
    });
  })



};
