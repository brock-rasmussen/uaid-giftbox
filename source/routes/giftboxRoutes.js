var express = require('express');
var routes = function(path, nodemailer, Parse){

  var giftboxRouter = express.Router(path, nodemailer, Parse);

  //Initialize Parse and Select Table ----- INSERT THE APPLICATION ID AND JS KEY FOR TESTING
  Parse.initialize();
  var Recipients = Parse.Object.extend("recipients");


  giftboxRouter.route('/')
  .get(function(req, res){
    res.sendFile(path.join(__dirname + './../index.html'));
  });

  giftboxRouter.route('/recipients')
  .get(function (req, res){
    var query = new Parse.Query(Recipients);
    query.find({
      success: function(results) {
        for(x in results){
          console.log(results[x].get('name'));
          console.log(results[x].get('email'));
        }
      },
      error: function(error) {
        console.log(error);
      }
    });
    res.send('Testing Recipients Get');
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

  return giftboxRouter;

};

module.exports = routes;
