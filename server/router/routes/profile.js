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


/**
 * Redirections for login route
**/
router.post('/', function (req, res) {
    res.status(201).json({
        user : req.user
    });
});

module.exports = router;
