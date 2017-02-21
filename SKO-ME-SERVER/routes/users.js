var express = require('express');
var router = express.Router();
// encryption module
var crypto = require('crypto');
var moment = require('moment');
// user model
var User = require('../models/users');
// jwt model
var Jwt = require('../models/jwt');
//var Encrypt = require('../models/encrypt'); แปลง MD5

/* GET users listing. */
router.post('/login', function (req, res, next) {
  let data = req.body.data;
  //let username = req.body.username;
  //let password = req.body.password;

//let strObject = Encrypt.decrypt(data);
  let user = JSON.parse(strObject);

  console.log(data);
  console.log(user);

  // username
  let username = user.username;
  // password
  let password = user.password;
  // db connection
  let db = req.dbPool;
  // check username and password
  if (username && password) {
    // encrypt password with md5 แปลง MD5
    //let encryptedPassword = crypto.createHash('md5').update(password).digest('hex'); 
    // check login
    User.login(db, username, password)
      .then((rows) => {
        
        // login success
        if (rows.length) {
          // get user id from index 0
          let userId = rows[0].id;
          // sign token 
          let token = Jwt.sign({ userId: userId });
          // console.log(token);
          let _token = Encrypt.encrypt(token);

          res.send({ ok: true, data: _token });
        } else { // login failed
          res.send({ ok: false, error: 'Invalid username/password!' });
        }
      }, (error) => { // query/connection error
        res.send({ ok: false, error: error });
      })
  } else { // incorrect data
    res.send({ ok: false, error: 'Incorrect data!' });
  }
});

module.exports = router;
