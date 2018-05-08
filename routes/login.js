var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
let model = require('./mongodb/users');

/* GET users listing. */
router.post('', function(req, res, next) {
  let reqData = req.body;
  console.log(reqData);
  model.findOne(reqData, (error, data) => {
    if (!error) {
      var token = jwt.sign({ name: data.name }, JSON.stringify(data) + String(new Date()), {
        expiresIn: 10080 // token到期时间设置
      });
      model.updateOne(reqData, { token }, () => {
        res.json({
          success: true,
          message: '验证成功!',
          token: 'Bearer ' + token,
          name: reqData.name
        });
      });
    } else {
      res.send({ success: false });
    }
  });
});
module.exports = router;