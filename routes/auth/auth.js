const passport = require('passport');
require('../passport')(passport);

module.exports = function(app) {
  return app.all('/index*', passport.authenticate('bearer', { session: false }), function(err, req, res, next) {
    if (!err) {
      return next();
    } else {
      res.json({ succes: false, message: '请重新登陆!' });
    }
  });
};