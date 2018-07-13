let mongoose = require('./mongo');

let model = mongoose.model('images', {
  userName: String,
  userID: String,
  imgs: Object,
  type: String
}, 'images');
module.exports = model;