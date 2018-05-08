const Strategy = require('passport-http-bearer').Strategy;
const model = require('./mongodb/users');

module.exports = function(passport) {
  passport.use(new Strategy(
    function(token, done) {
      model.findOne({
        token: token
      }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  ));
};