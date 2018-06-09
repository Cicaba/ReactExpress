let express = require('express');
let router = express.Router();
let modelDB = require('./mongodb/imagesDB');
let passport = require('passport');
require('./passport')(passport);

// router.post('', passport.authenticate('bearer', { session: false }),
//   function(req, res) {
//     res.json({ success: true });
//   });
router.post('', function(req, res) {
  res.json({ success: true });
});
//保存图片
router.post('/upData', function(req, res) {
  let reqData = req.body;
  modelDB.findOne({ userID: reqData.userID }, (err, data) => {
    if (!data) {
      let model = new modelDB();
      model.imgs = reqData.imgs;
      model.userId = reqData.userId;
      model.userName = reqData.userName;

      model.save((err, Obj) => {
        if (!err) {
          res.json({ success: true, message: '保存成功!' });
        } else {
          res.json({ success: false, message: '保存失败!' });
        }
      });
    } else {
      modelDB.updateOne(data, { imgs: data.imgs.concat(reqData.imgs) }, (error) => {
        if (!error) {
          res.json({ success: true, message: '保存成功!' });
        } else {
          res.json({ success: false, message: '保存失败!' });
        }
      });
    }
  });
});
//获取图片
router.post('/getImgs', (req, res, next) => {
  let reqData = req.body;
  modelDB.findOne(reqData, (error, data) => {
    if (!data) {
      res.json({ success: false, 'message': '没有查询到数据' });
    } else {
      let url = [];
      data.imgs.forEach(el => {
        url.push(`/index/img/${el.name}`);
      });
      res.json({ success: true, data: url });
    }
  });
});

module.exports = router;