/**
 * The Index of Routes
 */

module.exports = function (app, passport) {

    app.use('/api', require('./routes/home'));

    // The signup route
    app.use('/api/signup', require('./routes/signup'));
    app.use('/api/login', require('./routes/login'));
    app.use('/api/profile', isLoggedIn, require('./routes/profile'));

    app.get('/api/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    // The API route
    app.use('/api/colloc', require('./routes/colloc'));
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}