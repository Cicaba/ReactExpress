const Strategy = require('passport-http-bearer').Strategy;
// const model = require('./mongodb/users');
const jwt = require('jsonwebtoken');

module.exports = function(passport) {
  passport.use(new Strategy(
    function(token, done) {
      jwt.verify(token, 'cicaba', function(err, decoded) {
        if (!err) {
          console.log('用户验证成功!');
          return done(null, true);
        } else {
          console.log('用户验证失败!');
          return done(err);
        }
      });
      // model.findOne({
      //   token: token
      // }, function(err, user) {
      //   if (err) {
      //     console.log('数据库查询失败');
      //     return done(err);
      //   }
      //   if (!user) {
      //     console.log('失败');
      //     return done(new Error());
      //   }
      //   console.log('成功');
      //   return done(null, user);
      // });
    }
  ));
};