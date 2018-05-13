let mongoose = require('./mongo');

let model = mongoose.model('imagesDB', {
  userName: String,
  userID: String,
  imgs: Array
}, 'imagesDB');
module.exports = model;