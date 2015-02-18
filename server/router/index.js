var express = require('express');
var router = express.Router();

var colloc = require('./routes/colloc');
var user = require('./routes/user');
//var auth = require('./routes/auth');

/**
 * The Index of Routes
 */

module.exports = function (app) {


    // colloc
    app.get('/api/colloc', colloc.list);
    app.post('/api/colloc', colloc.add);
    app.get('/api/colloc/:colloc_id', colloc.get);
    app.put('/api/colloc/:colloc_id', colloc.update);
    app.delete('/api/colloc/:colloc_id', colloc.delete);

    // users
    app.get('/api/user', user.list);
    app.post('/api/user', user.add);
    
}