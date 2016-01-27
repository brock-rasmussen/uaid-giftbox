angular.module('UAID-Giftbox', [])

  .controller('UAID-Controller', ['$http', function($http){

    var self = this;
    this.userName = "";
    this.userEmail = "";
    this.submit = function (){
      $http.post('/recipients',
      {
        'name': self.userName,
        'email': self.userEmail
      })
      .then(function(res){
          console.log(res.data);
      })

    };

  }]);
