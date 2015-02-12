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
        message : "you are at home"
    });
});

module.exports = router;
