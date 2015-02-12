/**
 * This handles the signing up of users
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');
var db = require('../../database');
var Users = db.users;

// The POST /signup route


router.post('/', function (req, res) {
    console.log("in signup before authenticate");
    
    // passport.authenticate('local-signup', {
    //     successRedirect : '/profile', // redirect to the secure profile section
    //     failureRedirect : '/signup', // redirect back to the signup page if there is an error
    // });

});

// export the router for usage in our server/router/index.js
module.exports = router;