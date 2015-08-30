var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var restify = require('express-restify-mongoose')

mongoose.connect('mongodb://localhost/alertsome-rest');

var User = new Schema({
    id: { type: String },
    notify_id: { type: String },
    token: {type: String}
});
var UserModel = mongoose.model('User', User);

var Group = new Schema({
    notify_id: [User],
    name: { type: String},
    tipo: {type: String}
});

var GroupModel = mongoose.model('Group', Group);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());

var router = express.Router();
restify.serve(router, UserModel);
restify.serve(router, GroupModel);
app.use(router);

app.listen(3000, function() {
    console.log("Express server listening on port 3000");
});
