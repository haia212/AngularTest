/**
 * The Index of Routes
 */

module.exports = function (app, passport) {

    // app.use('/api', require('./routes/home'));

    // // The signup route
    // app.use('/api/signup', require('./routes/signup'));
    // app.use('/api/login', require('./routes/login'));
    // app.use('/api/profile', auth, require('./routes/profile'));

    // app.get('/api/logout', function(req, res) {
    //     req.logout();
    //     res.redirect('/');
    // });

    // // The API route
    // app.use('/api/colloc', auth, require('./routes/colloc'));



    // The signup route
    app.use('/signup', require('./routes/signup'));

}

// Define a middleware function to be used for every secured routes 
var auth = function(req, res, next){ 
    if (!req.isAuthenticated()) 
        res.send(401); 
    else 
        next(); 
}; 