var db = require("../models");

var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.render('signin');
 
    });
 
}

exports.room1 = function(req, res) {
 
    res.render('room1');
 
}

exports.room2 = function(req, res) {
 
    res.render('room2');
 }

 exports.room3 = function(req, res) {
 
    res.render('room3');
 
}

