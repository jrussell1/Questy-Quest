require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var passport = require('passport')
var session  = require('express-session');



var db = require("./models");

var app = express();

var PORT = process.env.PORT || 7070;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// For Passport
// Session Secret
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));



// Handlebars
app.set('views', './views')
app.engine('handlebars', exphbs({
    extname: '.handlebars',
    // defaultLayout: "main"
}));
app.set('view engine', 'handlebars');

// Routes
require("./routes/apiAuthRoutes")(app,passport);
require("./routes/apiPlayerRoutes")(app);
require("./routes/apiItemsRoutes")(app);
require("./routes/apiStateRoutes")(app);
require("./routes/htmlRoutes")(app);
require('./config/passport/passport.js')(passport, db.User);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
