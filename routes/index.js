var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  id : String,
  notify_id: String,
  token : String
});

mongoose.connect('mongodb://localhost:27017/alertsome');
var users = mongoose.model('users', userSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/register', function(req, res, next) {
  var notifyId = req.body.notify_id;
  console.log(req.body.notify_id);
  var newuser = new users({
    id: 1,
    notify_id: notifyId,
    token: 'token666'
  });

  newuser.save(function (err) {
    if (err) return handleError(err);
  });

  res.json({"token":newuser.token});

  // users.find({id: 1},function(err,users){
  //   console.log(users);
  // });
});

module.exports = router;
