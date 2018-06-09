let mongoose = require('mongoose');
mongoose.connect('mongodb://cicaba:515253@118.24.163.252/cicaba', { auto_reconnect: true }, () => {
  console.log('数据库连接成功!');
});
module.exports = mongoose;