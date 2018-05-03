var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://xxx:xxx@118.24.163.252/cicaba', { auto_reconnect: true }, () => {
  console.log('数据库连接成功!');
});
var model = mongoose.model('content', {
  name: String
});
router.get('/', function(req, res, next) {
  var Modle = new model();
  Modle.name = '测试';
  Modle.save(function(error) {
    if (error) {
      res.send('<script>alert(\'添加失败\')</script>');
    } else {
      res.send('<script>alert(\'添加成功\')</script>');
    }
  });
  // res.render('index', { title: 'Express测试' });
});
module.exports = router;