/*
** Colloc CRUD
*/

var db = require('../../database');
var Colloc = db.collocs;

exports.add = function(req, res){
    var colloc = new Colloc();      // create a new instance of the Bear model
    colloc.name = req.body.name;  // set the colloc name (comes from the request)
    
    colloc.save(function(err) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'Colloc created!' });
    });
};

exports.list = function(req, res) {
    Colloc.find(function(err, collocs) {

        if (err)
            res.send(err);

        res.json(collocs);
    });
};

exports.get = function(req, res) {

    Colloc.findById(req.params.colloc_id, function(err, colloc) {
        if (err)
            res.send(err);
        res.json(colloc);
    });
};
exports.update = function(req, res) {
    Colloc.findById(req.params.colloc_id, function(err, colloc) {

        if (err)
            res.send(err);

        colloc.name = req.body.name;  
        colloc.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Colloc updated!' });
        });

    });
};
exports.delete = function(req, res) {
    Colloc.remove({ 
        _id : req.params.colloc_id,
    }, function(err, colloc) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
};
