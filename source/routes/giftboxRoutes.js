var express = require('express');


var routes = function(path, nodemailer, Firebase, request, cloudinary){

  var giftboxRouter = express.Router(path, nodemailer, Firebase, request, cloudinary);
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
  var adminref = new Firebase("https://giftboxtest.firebaseio.com/users");


  giftboxRouter.route('/')
  .get(function(req, res){
    res.sendFile(path.join(__dirname + './../index.html'));
  });

  giftboxRouter.route('/admin')

  .get(function(req,res) {
    res.sendFile(path.join(__dirname + './../adminLog.html'));
  })

  .post(function(req,res) {
    var recips;
    if(!req.body.email || !req.body.pass){
      res.end();
    };
    adminref.authWithPassword({
      email    : req.body.email,
      password : req.body.pass
    }, function(error, authData) {
      if(error){
        console.log(error);
        res.send('There has been an error, please verify your login credentials.');
      } else {
        adminref.orderByChild('approved').equalTo(false).once("value", function(snapshot) {
          recips = snapshot.val();
          console.log(recips);
          res.send(recips);
        }, function (err) {
          console.log("The read failed: " + err.code);
          res.end();
        });

        console.log(authData);
      }
    }, {
      remember: "sessionOnly"
    });
  });

  giftboxRouter.route('/admin/approve/:recid')
  .post(function(req, res){
    if(!req.body.email || !req.body.pass){
      res.end();
    };
    adminref.authWithPassword({
      email    : req.body.email,
      password : req.body.pass
    }, function(error, authData) {
      if(error){
        console.log(error);
        res.send('There has been an error, please verify your login credentials.');
      } else {
        console.log('approving!');
        adminref.child(req.params.recid + '/approved').set(true);
        res.send({'approved': true});
      }
    }, {
      remember: "sessionOnly"
    });
  });

  giftboxRouter.route('/home')
  .get(function (req, res){
    var users;
    fbApp.orderByChild('approved').equalTo(true).limitToFirst(8).once("value", function(snapshot) {
        console.log(snapshot);
        users = snapshot.val();
        securedUsers = {};
        for(x in users) {
          securedUsers[x] = {
            'fname': users[x].fname,
            'age': users[x].age,
            'intage': users[x].intage,
          };
          if(!users[x].photo){
            securedUsers[x].photo = "profile1.jpg";
          }else{
            securedUsers[x].photo = users[x].photo;
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

  giftboxRouter.route('/recipients/data/:recid')
  .get(function (req, res){

    recRef = new Firebase("https://giftboxtest.firebaseio.com/users/" + req.params.recid);
    recRef.authWithCustomToken(token, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Login Succeeded!", authData);        }
      });
      recRef.once("value", function(snapshot) {
          recData = snapshot.val();
          var filteredData = {};
          filteredData = {
              'fname': recData.fname,
              'age': recData.age,
              'intage': recData.intage,
              'gifts': recData.gifts
          };
          if(!recData.photo) {
            filteredData.photo = '../profile1.jpg';
          } else {
            filteredData.photo = recData.photo;
          };
          console.log(filteredData);
          res.send(filteredData);
      }, function (err) {
        console.log("The read failed: " + err.code);
      })

  });

  giftboxRouter.route('/recipients/?:recid')
  .get(function (req, res){
    res.sendFile(path.join(__dirname + './../recipient.html'));
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
      'gifts': req.body.gifts
    };

    if(req.body.photo){
      payload.photo = req.body.photo
    };
    if(req.body.agencyName){
      payload.agencynName = req.body.agencyName
    };
    if(req.body.agencyLocation){
      payload.agencynLocation = req.body.agencyLocation
    };
    if(req.body.agencyPhone){
      payload.agencynName = req.body.agencyPhone
    };

    cloudinary.uploader.upload(payload.photo, function(result) {
      console.log(result);
      if(result.url){
        payload.photo = result.url;
        console.log('Photo changed, storing URI');
      };
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

    console.log('Payload recieved');
    console.log(req.body);




  });
  giftboxRouter.route('*')
  .get(function(req, res) {
    res.redirect('/')
  });



  return giftboxRouter;

};

  module.exports = routes;
