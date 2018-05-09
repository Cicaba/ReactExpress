const Strategy = require('passport-http-bearer').Strategy;
const model = require('./mongodb/users');

module.exports = function(passport) {
  passport.use(new Strategy(
    function(token, done) {
      console.log('查询', token);
      model.findOne({
        token: token
      }, function(err, user) {
        console.log('验证数据', user);
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        console.log('成功');
        return done(null, user);
      });
    }
  ));
};