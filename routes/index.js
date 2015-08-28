var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var requests = require('../utils/utils');

var userSchema = mongoose.Schema({
  id : String,
  notify_id: String,
  token : String
});

var data = "alertas asome";

mongoose.connect('mongodb://localhost:27017/alertsome');
var users = mongoose.model('users', userSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  requests.send(function(){
    console.log('hola dentro');
  });
  res.render('index', { title: 'Express' });
});


router.post('/register', function(req, res, next) {
  var md5sum = crypto.createHash('md5').update(data).digest("hex");
  var notifyId = req.body.notify_id;
  console.log(md5sum);
  var newuser = new users({
    id: 1,
    notify_id: notifyId,
    token: md5sum
  });

  newuser.save(function (err, data) {
    if (err) return handleError(err);
    console.log(data);
  });
  res.json({"token":md5sum});
});

router.post('/alert', function(req, res, next){
  users.find({}, function(err, users) {
    var userMap = {};

    users.forEach(function(user) {
      userMap[user._id] = user;
      console.log(userMap);
      // requests.send(data, function(data){
      //   console.log('hola dentro');
      // });
    });
  });

})

module.exports = router;
