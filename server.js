// Modules
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('node_modules/angular/'));

//Routes
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'source/index.html'));
});

app.post('/recipients', function (req, res){
  console.log(req);
});

app.listen(process.env.PORT || 8000, function () {
  console.log("server started on port 8000");
});
