angular.module('UAID-Admin', [])

  .controller('UAID-AdminController',  function($http){

    var self = this;
    self.recips = {};
    self.authed = false;
    self.recipsArr = [];
    self.recipsIds = [];

    self.validate = function() {
      $http.post('/admin', {
        'email': self.email,
        'pass': self.pass
      }).then(function(response) {
        console.log('Successfully logged in.');
        self.recips = response.data;
        for(var x in self.recips) {
          self.recipsArr.push(self.recips[x])
        };
        self.recipsIds = Object.keys(self.recips);
        self.authed = true;
        console.log(self.recipsArr);
        if(!response.data) {
          self.noUsers = true;
        };
      }, function(response) {
        console.log('There was an error, please try again later!');
      })
    };

    self.approve = function(x, index) {
      var ext = x;
      $http.post('/admin/approve/' + ext, {
        'email': self.email,
        'pass': self.pass
      }).then(function(response) {
        console.log(response);
        if(response.data.approved == true) {
          self.recipsArr[index].approved = true;
        };
      }, function(err) {
        console.log(err);
      })
    };

    self.deny = function(x, index) {
      var ext = x;
      $http.post('/admin/deny/' + ext, {
        'email': self.email,
        'pass': self.pass
      }).then(function(response) {
        console.log(response);
        if(response.data.denied == true) {
          self.recipsArr[index].denied= true;
        };
      }, function(err) {
        console.log(err);
      })
    };

    self.retrieveCsv = function() {
      $http.post('/admin/export', {
        'email': self.email,
        'pass': self.pass
      }).then(function(res) {
        console.log(res.data);
        self.csv = res.data;
        window.URL = window.webkitURL || window.URL;
        var contentType = 'text/csv';
        var csvFile = new Blob([self.csv], {type: contentType});
        var a = document.createElement('a');
        a.download = 'uaidGiftBox.csv';
        a.href = window.URL.createObjectURL(csvFile);
        a.textContent = 'Download CSV';

        a.dataset.downloadurl = [contentType, a.download, a.href].join(':');

        document.body.appendChild(a);
      }, function(err) {
        console.log(err)
      })
    };


  });
