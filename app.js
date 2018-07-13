var express = require('express');
var path = require('path');

var fs = require('fs');
var accessLogfile = fs.createWriteStream('access.log', { flags: 'a' });
var errorLogfile = fs.createWriteStream('error.log', { flags: 'a' });
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const passport = require('passport'); // 用户认证模块passport

var index = require('./routes/index');
var auth = require('./routes/auth/auth');
var login = require('./routes/login');
var classify = require('./routes/classify');

var app = express();
app.use(logger({ stream: accessLogfile }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(passport.initialize()); // 初始化passport模块

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//解析application/json 解析
app.use(bodyParser.json({
  uploadDir: __dirname + '/upload',
  keepExtensions: true,
  limit: '50mb'
}));
//解析application/x-www-form-urlencoded 解析
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

auth(app);
app.use('/login', login);
app.use('/index', index);
app.use('/index/classify', classify);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  //
  var meta = '[' + new Date() + '] ' + req.url + '\n';
  errorLogfile.write(meta + err.stack + '\n');
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;