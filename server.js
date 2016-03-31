// Modules
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var request = require('request');
var Firebase = require('firebase');
var cloudinary = require('cloudinary');
var secrets = require('./secrets.js');
cloudinary.config(secrets.cloud);


//Middleware
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({'extended': true}));

app.use(express.static('node_modules/angular/'));
app.use(express.static('node_modules/angular-recaptcha/release'));
app.use(express.static('node_modules/ng-file-upload/dist'));
app.use(express.static('source/scripts/'));
app.use(express.static('source/css/'));
app.use(express.static('source/images/'));

//Routes
giftboxRouter = require('./source/routes/giftboxRoutes.js')(path, nodemailer, Firebase, request, cloudinary, secrets);
app.use('/', giftboxRouter);


app.listen(process.env.OPENSHIFT_NODEJS_PORT || 8000, process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1', function () {
  console.log("server started on port 8000");
});
