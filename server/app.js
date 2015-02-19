
// call the packages we need
var express         = require('express');        // call express
var app             = express();                 // define our app using express
var path            = require('path');
var bodyParser      = require('body-parser');
var logger          = require('morgan');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

var port = process.env.PORT || 8080;        // set our port

module.exports = app;

app.get('/api/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// Middleware : Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://0.0.0.0:8000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, x-access-token, x-key');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var router = require('./router')(app);

//app.use('/api', router);


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
