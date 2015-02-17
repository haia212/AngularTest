
var db = require('../../database');
var User = db.users;

exports.add = function(req, res){
    var user = new User({
        email    : req.body.email,
        password : req.body.password
    });      // create a new instance of the Bear model
    

    // save the bear and check for errors
    user.save(function(err) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'user created!' });
    });
};

exports.list = function(req, res){
    User.find(function(err, users) {
        if (err)
            res.send(err);

        res.json(users);
    })
}