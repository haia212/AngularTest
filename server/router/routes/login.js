/**
 * This handles the signing in of users
 */
var express = require('express');
var router = express.Router();
var db = require('../../database');

var LocalStrategy = require('passport-local').Strategy;

var Users = db.users;


/**
 * Redirections for login route
**/
router.post('/', function (req, res) {
    res.status(201).json({
        req : req
    });
});


// /**
//  * Defines a local strategy to log in
//  * Uses a username(email)/password authentication
// **/
// passport.use(new LocalStrategy(

//   function(email, password, done) {
//     Users.findOne({ email: email }, function (err, user) {

//       if (err) { return done(err); }

//       // user not found
//       if (!user) {
//         return done(null, false, { message: email + 'User not found.' });
//       }

//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }

//       return done(null, user);
//     });
//   }

// ));

module.exports = router;
