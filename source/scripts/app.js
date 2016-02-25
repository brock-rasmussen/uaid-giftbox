angular.module('UAID-Giftbox', ['vcRecaptcha', 'ngFileUpload'])

  .controller('UAID-Controller', ['$http', 'vcRecaptchaService', 'Upload', function($http, recaptcha, Upload){

    getRecipients();
    var self = this;
    this.userName = "";
    this.userEmail = "";
    this.recipsArr = [];
    this.limit = 4;
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

    function getRecipients() {
        $http.get('/recipients')
        .then(
          function(res){
            console.log(res.data);
            self.recips = res.data;
            for(var x in self.recips){
              self.recipsArr.push(self.recips[x]);
            }
          });
    };

    this.seeMoreRecips= function() {
      if(self.limit < 8) {
        self.limit = 8;
      }
      console.log(self.limit);
    };


  }]);
