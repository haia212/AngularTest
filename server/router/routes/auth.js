// Load required packages
var db    = require('../../database');
var User  = db.users;
var jwt   = require('jwt-simple');


exports.login = function(req, res) {
  var username = req.body.username || '';
  var password = req.body.password || '';

  if (username == '' || password == '') {
      res.status(err.status || 401);
      return res.send({
        message : "No credentials provided"
      });
  }

  User.findOne({username: username}, function (err, user) {
  
      if (err) {
          console.log(err);
          res.status(err.status || 401);
          return res.send({
            message : err.message,
            err : err
          });
      }

      if (user) {
        user.verifyPassword(password, function(err, isMatch) {
            if (!isMatch) {
                console.log("Attempt failed to login with " + user.username);
                res.status(err.status || 401);
                return res.send({
                  message : err.message,
                  err : err
                });
            }


            return res.json(genToken(user));
        });
        
      } else {
        res.status(401);
        return res.send({
          message : "User not found",
          err : err
        });
      }

  });
}

exports.logout = function(req, res) {
}

exports.validateUser = function(user_id, callback) {
  User.findById(user_id, function (err, user) {
      callback(user);
  });
}


// private method
function genToken(user) {
  var expires = expiresIn(7); // 7 days
  var token = jwt.encode({
    exp: expires,
    user_id: user._id
  }, require('../../config/secret')());
 
  return {
    token: token,
    expires: expires,
    user: user
  };
}

function expiresIn(numDays) {
  var dateObj = new Date();
  return dateObj.setDate(dateObj.getDate() + numDays);
}