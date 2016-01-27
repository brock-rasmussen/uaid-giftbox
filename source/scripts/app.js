angular.module('UAID-Giftbox', [])

  .controller('UAID-Controller', ['$http', function($http){

    var self = this;
    this.userName = "";
    this.userEmail = "";
    this.submit = function (userInfo){
      console.log("name:" + self.userName +"  Email: " + self.userEmail);
    };

  }]);
