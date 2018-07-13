let express = require('express');
let router = express.Router();
let modelDB = require('./mongodb/imagesDB');
let passport = require('passport');
require('./passport')(passport);

router.post('', function(req, res) {
  res.json({ success: true });
});
//保存图片
router.post('/upData', function(req, res) {
  let reqData = req.body;
  //查询是否已存图片
  modelDB.findOne({ userID: reqData.userID, type: reqData.type }, (err, data) => {
    if (!data) {
      //新增
      let model = new modelDB();
      model.type = reqData.type;
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
      //添加
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
// //获取图片
// router.post('/getImgs', (req, res, next) => {
//   let reqData = req.body;
//   modelDB.findOne({ userName: reqData.userName, type: 'head' }, (error, data) => {
//     if (!data) {
//       res.json({ success: false, 'message': '没有查询到数据' });
//     } else {
//       res.json({ success: true, data: data.imgs });
//     }
//   });
// });
module.exports = router;