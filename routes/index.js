var express = require('express');
var router = express.Router();
const passport = require('passport');
require('./passport')(passport);

// router.post('', passport.authenticate('bearer', { session: false }),
//   function(req, res) {
//     res.json({ success: true });
//   });
router.post('', function(req, res) {
  res.json({ success: true });
});

// res.render('index', { title: 'Express测试' });
module.exports = router;