var express = require('express');
var body_parser = require('body-parser');
var mongoose = require('./mongoose.config');
require('dotenv').config();
var app = express();
app.use(body_parser.json());
var db = new mongoose();
app.set('view engine', 'ejs');

var express_port = process.env.PORT || 3000;
app.use(express.static('public'));
app.listen(express_port);
console.log('Server Started!');

module.exports = app;