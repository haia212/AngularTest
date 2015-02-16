
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var path       = require('path');
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
//var router = express.Router();              // get an instance of the express Router

/**
 * Routes
 */
var router = express.Router(); 


// // middleware to use for all requests
// router.use(function(req, res, next) {
//     // do logging
//     console.log('Something is happening.');
//     next(); // make sure we go to the next routes and don't stop here
// });

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// on routes that end in /colloc
// ----------------------------------------------------
router.route('/collocs')

    // create a bear (accessed at POST http://localhost:8080/api/colloc)
    .post(function(req, res) {
        
        var colloc = new Colloc();      // create a new instance of the Bear model
        colloc.name = req.body.name;  // set the colloc name (comes from the request)

        // save the bear and check for errors
        colloc.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json({ message: 'Colloc created!' });
        });
        
    })

     // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        Colloc.find(function(err, collocs) {
            if (err)
                res.send(err);

            res.json(collocs);
        });
    });
router.route('/collocs/:colloc_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Colloc.findById(req.params.colloc_id, function(err, colloc) {
            if (err)
                res.send(err);
            res.json(colloc);
        });
    })

    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Colloc.findById(req.params.colloc_id, function(err, colloc) {

            if (err)
                res.send(err);

            colloc.name = req.body.name;  // update the bears info

            // save the bear
            colloc.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Colloc updated!' });
            });

        });
    })
     // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        Colloc.remove({
            _id: req.params.colloc_id
        }, function(err, colloc) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

var db = require('./database');
var Colloc = db.collocs;


/**
 * Development Settings
 */
if (app.get('env') === 'development') {
    // This will change in production since we'll be using the dist folder
    app.use(express.static(path.join(__dirname, '../client')));
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, '../client/.tmp')));
    app.use(express.static(path.join(__dirname, '../client/app')));

    // Error Handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {

    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/dist')));

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

module.exports = app;
