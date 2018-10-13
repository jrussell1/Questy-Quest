var db = require("../models");

module.exports = function(app) {


  app.get("/", function(req, res) {
    res.render("index")
  })

  app.get("/intro", function(req, res) {
    res.render("intro")
  })


  app.get("/death", function(req, res){
    res.render("death");
  })

  app.get("/fightRoom1", function(req, res) {
    res.render("fightRoom1")
  })

  app.get("/fightRoom2", function(req, res) {
    res.render("fightRoom2")
  })

  app.get("/victory", function(req, res) {
    res.render("victory")
  })



  app.get("*", function(req, res) {
    res.render("404");
  });


};
