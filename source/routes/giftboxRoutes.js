var express = require('express');
var routes = function(path){

  var giftboxRouter = express.Router(path);

  giftboxRouter.route('/')
  .get(function(req, res){
    res.sendFile(path.join(__dirname + './../index.html'));
  });

  giftboxRouter.route('/recipients')
  .get(function (req, res){
    res.send('Testing Recipients Get');
  })
  .post(function (req, res){
    res.send('');
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
