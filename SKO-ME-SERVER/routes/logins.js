var express = require('express');
var router = express.Router();
//var crypto = require('crypto');
var jwt = require('../models/jwt');

var login = require('../models/login');

/* GET users listing. */
router.post('/login', function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  //let _password = crypto.createHash('md5').update(password).digest('hex');

  login.login(req.dbPool, username, password)

    .then((rows) => {
      
      if (rows.length) {
        let token = jwt.sign({ fname: rows[0].name });
        res.send({ ok: true, fname: rows[0].name, token: token });
      } else {
        res.send({ok: false, error: 'Invalid username/password'})
      }
    }, (err) => {
      res.send({ ok: false, error: err });
      })
});

module.exports = router;