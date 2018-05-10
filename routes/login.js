var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
let model = require('./mongodb/users');

/* GET users listing. */
router.post('', function(req, res, next) {
  let reqData = req.body;
  model.findOne(reqData, (error, data) => {
    if (!error) {
      var token = jwt.sign({ id: data.id, name: reqData.userName }, 'cicaba', {
        expiresIn: 10080 // token到期时间设置
      });
      model.updateOne(reqData, { token: token }, (error, obj) => {
        res.json({
          success: true,
          message: '验证成功!',
          token: 'Bearer ' + token,
          name: reqData.userName
        });
      });
    } else {
      res.send({ success: false });
    }
  });
});
module.exports = router;