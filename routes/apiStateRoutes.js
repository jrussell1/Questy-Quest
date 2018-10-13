
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/state", function(req, res) {
    db.State.findAll({
      where: {
        id: 4
      }
    }).then(function(data) {
      res.json(data)
    })
  });

  app.put("/api/state", function(req, res) {
    db.State.update({
        Room1: req.body.Room1,
        Room2: req.body.Room2,
        Room3: req.body.Room3,
        fightRoom1: req.body.fightRoom1,
        fightRoom2: req.body.fightRoom2,
        hasTorch: req.body.hasTorch,
        hasDagger: req.body.hasDagger,
        hasDust: req.body.hasDust
      },{
      where: {
        id: 4
    }})
  });

  app.post("/api/createstate", function(req, res) {
    db.State.create({
      room1: false,
      room2: false,
      room3: false,
      fightRoom1: false,
      fightRoom2: false,
      hasTorch: false,
      hasDagger: false,
      hasDust: false
    })
  .then(function(data){
    res.json(data)
  })
})


};
