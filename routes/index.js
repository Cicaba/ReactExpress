var express = require('express');
var router = express.Router();
const passport = require('passport');
require('./passport')(passport);

router.post('/', passport.authenticate('bearer', { session: false }),
  function(req, res) {
    res.json({ username: req.user.name });
  });
// var Modle = new model();
// Modle.name = '测试';
// Modle.save(function(error) {
//   if (error) {
//     res.send('<script>alert(\'添加失败\')</script>');
//   } else {
//     res.send('<script>alert(\'添加成功\')</script>');
//   }
// });
// res.render('index', { title: 'Express测试' });
module.exports = router;