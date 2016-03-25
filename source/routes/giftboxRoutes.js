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
  //
    var transporter = nodemailer.createTransport();
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
        res.status(403).send('There has been an error, please verify your login credentials.');
      } else {
        adminref.orderByChild('approved').equalTo(0).once("value", function(snapshot) {
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
        res.status(404).send('There has been an error, please verify your login credentials.');
      } else {
        console.log('approving!');
        adminref.child(req.params.recid + '/approved').set(1);
        res.send({'approved': true});
      }
    }, {
      remember: "sessionOnly"
    });
  });

  giftboxRouter.route('/admin/export')
  .post(function(req,res) {

    if(!req.body.email || !req.body.pass){
      res.end();
    };
    var db;
    adminref.authWithPassword({
      email    : req.body.email,
      password : req.body.pass
    }, function(error, authData) {
      if(error){
        console.log(error);
        res.status(404).send('There has been an error, please verify your login credentials.');
      } else {
        console.log('Retrieving DB');
        adminref.once("value", function(snapshot) {
          db = snapshot.val();
          var sortedDb = 'LastName, FirstName, Age, IntellectualAge, Agency, AgencyLocation, AgencyPhonenumber, PrimaryContact, PrimaryContactEmail, PrimaryContactPhonenumber, PrimaryContactRelationship, SecondaryContactPhonenumber, SecondaryContactRelationship, Ethnicity';
          for(var x in db) {
            sortedDb += '\n' + db[x].lname + ", " + db[x].fname + ", " + db[x].age + ", " + db[x].intage;
            if(db[x].agencyName) {
              sortedDb += ", " + db[x].agencyName;
            }else{
              sortedDb += ", ";
            };
            if(db[x].agencyLocation) {
             sortedDb += ", " + db[x].agencyLocation;
            }else{
             sortedDb += ", ";
            };
            if(db[x].agencyPhone) {
              sortedDb += ", " + db[x].agencyPhone;
            }else{
              sortedDb += ", ";
            };
            sortedDb += ", " + db[x].contactName + ", " + db[x].contactEmail + ", " + db[x].contactPhone + ", " + db[x].contactRelationship + ", " + db[x].contactSecPhone + ", " + db[x].contactSecRelationship + ", " + db[x].ethnicity;

          };
          res.send(sortedDb);
        });

      }
    }, {
      remember: "sessionOnly"
    });

  });

  giftboxRouter.route('/home')
  .get(function (req, res){
    var users;
    fbApp.orderByChild('approved').equalTo(1).limitToFirst(8).once("value", function(snapshot) {
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

    var mailOptions = {
      from: 'UAID Test <test@gmail.com>',
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
              'gifts': recData.gifts,
              'approved': recData.approved
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
  });

  giftboxRouter.route('/recipients')
  .post(function (req, res){
    var adopter = {
      'fName': req.body.adopterFName,
      'lName': req.body.adopterLName,
      'email': req.body.adopterEmail
    };
    adminref.child(req.body.recid + '/adopter').set(adopter);
    adminref.child(req.body.recid + '/approved').set(2);

    var formattedGifts = "";
    for(var x in req.body.recData.gifts) {
      formattedGifts += req.body.recData.gifts[x].gift + "   ";
      if(req.body.recData.gifts[x].size) {
        formattedGifts += "Size: " + req.body.recData.gifts[x].size + "  ";
      };
      if(req.body.recData.gifts[x].sizenum) {
        formattedGifts += req.body.recData.gifts[x].sizenum + " ";
      };
      if(req.body.recData.gifts[x].genre) {
        formattedGifts += ": " + req.body.recData.gifts[x].genre + "  ";
      };
      formattedGifts += "<br>";
    };
    var eContent = "<p>Thank you, " + req.body.adopterFName + "!</p><p>We greatly appreciate your aid in helping individuals with intellectual disabilities, and we know " + req.body.recData.fname + " will appreciate it too.</p><p>There are a few options for you to fulfill their wishlist.<ul><li>1. Find when and where to drop off your gifts on our webpage at http://www.uaidutah.org/holiday-gift-box/ .</li><li>2. If you plan on shopping online, you can mail the gifts to the address given in the link above. Note, that if you shop on smile.amazon.com with UAID set as your benefiting charity, a part of what you spend will be donated to UAID too. Double donations!</li></ul>Again, we greatly appreciate your help." + req.body.recData.fname + "'s wishlist can be found below. It is recommended that you spend $75 on gifts.</p>" + req.body.recLink + "<br>" + formattedGifts + "<p>If you find that you are unable to fulfill the wishlist, please contact us at 801-654-8449 as soon as possible.</p><p>Thanks a million!<br>UAID</p>"
    var mailOptions = {
      from: 'UAID Test <test@gmail.com>',
      to: req.body.adopterEmail,
      subject: 'test',
      text: eContent,
      html: eContent
    };

    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        return console.log(error);
        res.send('The server encountered an error sending an email.')
      }
      console.log('Message sent: ' + info.response);
      res.send({'adopted': true});
    });


  });

  giftboxRouter.route('/apply')
  .get(function(req, res){
    res.sendFile(path.join(__dirname + './../applicationInformation.html'));
  })

  .post(function(req, res){

    var payload = {
      'fname': req.body.fname,
      'lname': req.body.lname,
      'address': req.body.address,
      'age': req.body.age,
      'intage': req.body.intage,
      'ethnicity': req.body.ethnicity,
      'contactName': req.body.contactName,
      'contactPhone': req.body.contactPhone,
      'contactEmail': req.body.contactEmail,
      'contactRelationship': req.body.contactRelationship,
      'contactSecPhone': req.body.contactSecPhone,
      'contactSecRelationship': req.body.contactSecRelationship,
      'gifts': req.body.gifts,
      'approved': 0,
      'wrapped': req.body.wrapped
    };

    if(req.body.photo){
      payload.photo = req.body.photo
    };
    if(req.body.agencyName){
      payload.agencyName = req.body.agencyName
    };
    if(req.body.agencyLocation){
      payload.agencyLocation = req.body.agencyLocation
    };
    if(req.body.agencyPhone){
      payload.agencyPhone = req.body.agencyPhone
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
