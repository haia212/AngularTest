/**
 * This handles the signing in of users
 */
var express = require('express');
var router = express.Router();
var db = require('../../database');


var Collocs = db.collocs;


/**
 * Redirections for /colloc
**/
router.post('/', function (req, res) {
    res.status(201).json({
        req : req
    });
});


/**
 * Redirections for /colloc/add
**/
router.post('/add/', function (req, res) {
    // Create a new instance of the Beer model
    var colloc = new Colloc();

    // Set the colloc properties that came from the POST data
    colloc.name = req.body.name;

    // Save the colloc and check for errors
    colloc.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Colloc added', data: colloc });
    });
});

module.exports = router;
