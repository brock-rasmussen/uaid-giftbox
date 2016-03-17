angular.module('UAID-Apply', ['vcRecaptcha', 'ngFileUpload'])
  .controller('UAID-ApplyController', ['$http', 'vcRecaptchaService', 'Upload', '$scope', function($http, recaptcha, Upload, $scope){
    var self = this;
    self.log = function() {



      //recaptcha
      var response = recaptcha.getResponse();
      $http.post('/apply', {
        'recapResponse': response,
        'fname': self.fname,
        'lname': self.lname,
        'age': self.age,
        'intage': self.intage,
        'ethnicity': self.ethnicity,
        'contactName': self.contactName,
        'contactPhone': self.contactPhone,
        'contactEmail': self.contactEmail,
        'contactRelationship': self.contactRelationship,
        'contactSecPhone': self.contactSecPhone,
        'contactSecRelationship': self.contactSecRelationship,
        'agencyName': self.agencyName,
        'agencyLocation': self.agencyLocation,
        'agencyPhone': self.agencyPhone,
        'photo': self.photo,



      }).then(function(response) {
        console.log('You have successfully added a user!' + response);
      }, function(response) {
        console.log('There was an error, please try again later!');
        console.log(response);
      });

    };
    self.gifts = {};
    self.gifts.sizes = [{
      value: 'xs',
      label: 'Extra Small'
    },{
      value: 's',
      label: 'Small'
    },{
      value: 'l',
      label: 'Large'
    },{
      value: 'xl',
      label: 'Extra Large'
    },{
      value: '2xl',
      label: '2x Large'
    },{
      value: '3xl',
      label: '3x Large'
    },{
      value: '4xl',
      label: '4x Large'
    },{
      value: '5xl',
      label: '5x Large'
    },{
      value: '6xl',
      label: '6x Large'
    }];

    self.addPhoto = function() {
      setTimeout(function(){
         self.photo = document.getElementById('photo').value;
        }, 1000)
    };

    self.testing = function() {
      var giftsArr = [];
      var giftItem = {};
      for(var x in self.gifts) {
        for(var y in self.gifts[x])
          if(self.gifts[x][y].name) {
            giftItem = {
              'gift': self.gifts[x][y].name,
            };
            if(self.gifts[x][y].size) {
              giftItem.size = self.gifts[x][y].size;
            }
            console.log(giftItem);
            giftsArr.push(giftItem);
            giftItem = {};
          }
      };
      console.log(giftsArr);
    }


  }])
