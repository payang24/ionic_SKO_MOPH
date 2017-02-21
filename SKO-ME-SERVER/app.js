//===================================
require('dotenv').config();
var mysql = require('mysql');
var cors = require('cors');
var jwt = require('./models/jwt');
//===================================

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var logins = require('./routes/logins');
var customers = require('./routes/customers');
var fcm = require('./routes/fcm');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());




let dbPool = mysql.createPool({
  host: process.env.ME_HOST,
  user: process.env.ME_USER,
  password: process.env.ME_PASSWORD,
  database: process.env.ME_DB,
  port: process.env.ME_PORT
});
console.log(process.env.ME_HOST)
console.log(process.env.ME_USER)
console.log(process.env.ME_PASSWORD)
console.log(process.env.ME_DB)
console.log(process.env.ME_PORT)

let hdcPool = mysql.createPool({
  host: process.env.HDC_HOST,
  user: process.env.HDC_USER,
  password: process.env.HDC_PASSWORD,
  database: process.env.HDC_DB,
  port: process.env.HDC_PORT
  
});
// console.log(process.env.HDC_HOST)
// console.log(process.env.HDC_USER)
// console.log(process.env.HDC_PASSWORD)
// console.log(process.env.HDC_DB)
// console.log(process.env.HDC_PORT)

dbPool.on('connection', (connection) => {
  connection.query('SET NAMES utf8')
});

hdcPool.on('connection', (connection) => {
  connection.query('SET NAMES utf8')
});

app.use((req, res, next) => {
  req.dbPool = dbPool;
  req.hdcPool = hdcPool;
  next();
});

// token middleware
let authToken = (req, res, next) => {
  console.log(req.headers);
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  jwt.verify(token)
    .then((decoded) => {
      req.decoded = decoded;
      next();
    }, err => {
      return res.status(403).send({
        ok: false,
        msg: 'No token provided.'
      });
    });
}


app.use('/', index);
app.use('/users', users);
app.use('/logins', logins);
app.use('/customers', authToken, customers);
app.use('/fcm', authToken, fcm);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
