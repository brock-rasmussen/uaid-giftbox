// Modules
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var Parse = require('parse/node');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));


app.use(express.static('node_modules/angular/'));
app.use(express.static('source/scripts/'));

//Routes
giftboxRouter = require('./source/routes/giftboxRoutes.js')(path, nodemailer, Parse);
app.use('/', giftboxRouter);


app.listen(process.env.PORT || 8000, function () {
  console.log("server started on port 8000");
});
