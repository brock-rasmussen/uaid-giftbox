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


  });
