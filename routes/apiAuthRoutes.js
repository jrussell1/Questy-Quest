
var authController = require('../controllers/authController');



// Routes
// =============================================================
module.exports = function(app,passport) {



 
    app.get("/signup", authController.signup);
  
    app.get('/signin', authController.signin);
    
    app.get('/logout',authController.logout);

    app.get('/room1',isLoggedIn, authController.room1);

    app.get('/room2',isLoggedIn, authController.room2);
    
    app.get('/room3',isLoggedIn, authController.room3);
    
    app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/room1',

      failureRedirect: '/signup'
    }
));



app.post('/signin', passport.authenticate('local-signin', {
  successRedirect: '/intro',

  failureRedirect: '/signin'
}

));

function isLoggedIn(req, res, next) {
 
  if (req.isAuthenticated())
   
      return next();
       
  res.redirect('/signin');

}

};
