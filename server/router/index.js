var express = require('express');
var router  = express.Router();
var jwt     = require('express-jwt');
var secret  = require('../config/secret');

var colloc  = require('./routes/colloc');
var user    = require('./routes/user');
var auth    = require('./routes/auth');

/**
 * The Index of Routes
 */

module.exports = function (app) {


    // colloc
    app.get('/api/colloc', [require('../middleware/validateRequest')], colloc.list);
    app.post('/api/colloc', colloc.add);
    app.get('/api/colloc/:colloc_id', [require('../middleware/validateRequest')], colloc.get);
    app.put('/api/colloc/:colloc_id', colloc.update);
    app.delete('/api/colloc/:colloc_id', colloc.delete);

    // users
    app.get('/api/user', user.list);
    app.post('/api/user', user.add);

    // register
    app.post('/api/login', auth.login);
    app.get('/api/logout', auth.logout);
    
}