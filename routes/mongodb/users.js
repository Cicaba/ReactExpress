let mongoose = require('mongoose');
mongoose.connect('mongodb://cicaba:515253@118.24.163.252/cicaba', { auto_reconnect: true }, () => {
  console.log('数据库连接成功!');
});
let model = mongoose.model('users', {
  userName: String,
  password: String,
  token: String,
  id: String
});
module.exports = model;