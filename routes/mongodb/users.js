let mongoose = require('./mongo');

let model = mongoose.model('users', {
  userName: String,
  password: String,
  classify: Array,
  id: String,
  token: String
});
module.exports = model;