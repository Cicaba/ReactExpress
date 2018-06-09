let mongoose = require('./mongo');

let model = mongoose.model('imagesDB', {
  userName: String,
  userID: String,
  imgs: Object
}, 'imagesDB');
module.exports = model;