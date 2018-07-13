let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://xxx:xxx@cicaba-m2dqg.mongodb.net/Cicaba', { auto_reconnect: true }, () => {
  console.log('数据库连接成功!');
});
module.exports = mongoose;