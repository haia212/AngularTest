var express = require('express');
var router = express.Router();


var colloc = require('./routes/colloc');

/**
 * The Index of Routes
 */

module.exports = function (app) {

    app.get('/api/colloc', colloc.list);
    app.post('/api/colloc', colloc.add);
    app.get('/api/colloc/:colloc_id', colloc.get);
    app.put('/api/colloc/:colloc_id', colloc.update);
    app.delete('/api/colloc/:colloc_id', colloc.delete);

}

// Define a middleware function to be used for every secured routes 
var auth = function(req, res, next){ 
    if (!req.isAuthenticated()) 
        res.send(401); 
    else 
        next(); 
}; 
