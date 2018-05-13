let mongoose = require('./mongo');

let model = mongoose.model('users', {
  userName: String,
  password: String,
  id: String,
  token: String
});
module.exports = model;