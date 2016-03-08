var express = require('express');


var routes = function(path, nodemailer, Firebase, request){

  var giftboxRouter = express.Router(path, nodemailer, Firebase, request);
  var FirebaseTokenGenerator = require("firebase-token-generator");
  //DO NOT FORGET TO REMOVE KEY BEFORE PUSHING!!!!!
  var tokenGenerator = new FirebaseTokenGenerator("");
  var token = tokenGenerator.createToken(
    {uid: "1"},
    {admin: true}
  );
  //Instantiates Firebase Reference
  var fbApp = new Firebase("https://giftboxtest.firebaseio.com/users");
  fbApp.authWithCustomToken(token, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Login Succeeded!", authData);
    }
  });



  giftboxRouter.route('/')
  .get(function(req, res){
    res.sendFile(path.join(__dirname + './../index.html'));
  });

  giftboxRouter.route('/recipients')
  .get(function (req, res){
    var users;
    fbApp.limitToFirst(8).once("value", function(snapshot) {
        users = snapshot.val();
        securedUsers = {};
        for(x in users) {
          securedUsers[x] = {
            'fname': users[x].fname,
            'age': users[x].age,
            'intage': users[x].intage
          }
        };
        console.log(securedUsers);
        res.send(securedUsers);
    }, function (err) {
      console.log("The read failed: " + err.code);
    })

  })
  .post(function (req, res){
    var name = req.body.name;
    var email = req.body.email;
    console.log('User request recieved!');
    res.send('request recieved and email sent! ' + name + " " + email);

  /* SEND THE CODE BELOW TO THE CONTROLLER EVENTUALLY
  ----------------------------------------------------- */
    var transporter = nodemailer.createTransport('smtps://email%40gmail.com:pass@smtp.gmail.com');
    var mailOptions = {
      from: 'Name <email@gmail.com>',
      to: req.body.email,
      subject: 'test',
      text: req.body.name
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        return console.log(error);
      }
      console.log('Message sent: ' + info.response);
    });

    /* ^^^^^^^^^^^^ MOVE THIS CODE TO THE CONTROLLER ^^^^^^^
    --------------------------------------------------------*/

  });

  giftboxRouter.route('/recipients/:recid')
  .get(function (req, res){
    res.send(req.params.recid);
  })
  .post(function (req, res){
    res.send('');
  });

  giftboxRouter.route('/apply')
  .get(function(req, res){
    res.sendFile(path.join(__dirname + './../applicationInformation.html'));
  })

  .post(function(req, res){


    var payload = {
      'fname': req.body.fname,
      'lname': req.body.lname,
      'age': req.body.age,
      'intage': req.body.intage,
      'ethnicity': req.body.ethnicity,
      'contactName': req.body.contactName,
      'contactPhone': req.body.contactPhone,
      'contactEmail': req.body.contactEmail,
      'contactRelationship': req.body.contactRelationship,
      'contactSecPhone': req.body.contactSecPhone,
      'contactSecRelationship': req.body.contactSecRelationship,
      'agencyName': req.body.agencyName,
      'agencyLocation': req.body.agencyLocation,
      'agencyPhone': req.body.agencyPhone
    };
    console.log(payload);
    console.log(req.body);

    //Verify Recaptcha
    request.post(
    'https://www.google.com/recaptcha/api/siteverify',
    {form: {
      'secret': '',
      'response': req.body.recapResponse,
      'remoteip': req.connection.remoteAddress,
    }},
    function(error, response, body) {
      var responseJson = JSON.parse(body);
      if(!error && response.statusCode == 200 && responseJson.success === true) {
      console.log("Recaptcha has been verified successfully!");
      fbApp.push(payload);
      res.send({'success': 'true'});
      } else if (error){
        console.log(error);
        res.end();
      }
    }
  );


  });



  return giftboxRouter;

};

  module.exports = routes;
