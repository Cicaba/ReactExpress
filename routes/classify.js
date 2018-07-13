let router = require('express').Router();
let modelDB = require('./mongodb/imagesDB');
//获取图片
router.post('/head', (req, res, next) => {
  let reqData = req.body;
  modelDB.findOne({ userName: reqData.userName, type: 'head' }, (error, data) => {
    if (!data) {
      res.json({ success: false, 'message': '没有查询到数据' });
    } else {
      res.json({ success: true, data: data.imgs });
    }
  });
});
router.post('/view', (req, res, next) => {
  let reqData = req.body;
  modelDB.findOne({ userName: reqData.userName, type: 'view' }, (error, data) => {
    if (!data) {
      res.json({ success: false, 'message': '没有查询到数据' });
    } else {
      res.json({ success: true, data: data.imgs, type: 'view', name: '风景' });
    }
  });
});
router.post('/figuer', (req, res, next) => {
  let reqData = req.body;
  modelDB.findOne({ userName: reqData.userName, type: 'figuer' }, (error, data) => {
    if (!data) {
      res.json({ success: false, 'message': '没有查询到数据' });
    } else {
      res.json({ success: true, data: data.imgs, type: 'figuer', name: '人物' });
    }
  });
});
router.post('/life', (req, res, next) => {
  let reqData = req.body;
  modelDB.findOne({ userName: reqData.userName, type: 'life' }, (error, data) => {
    if (!data) {
      res.json({ success: false, 'message': '没有查询到数据' });
    } else {
      res.json({ success: true, data: data.imgs });
    }
  });
});
router.post('/rests', (req, res, next) => {
  let reqData = req.body;
  modelDB.findOne({ userName: reqData.userName, type: 'rests' }, (error, data) => {
    if (!data) {
      res.json({ success: false, 'message': '没有查询到数据' });
    } else {
      res.json({ success: true, data: data.imgs });
    }
  });
});
module.exports = router;