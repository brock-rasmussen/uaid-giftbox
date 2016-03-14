angular.module('UAID-Apply', ['vcRecaptcha', 'ngFileUpload'])
  .controller('UAID-ApplyController', ['$http', 'vcRecaptchaService', 'Upload', '$scope', function($http, recaptcha, Upload, $scope){
    var self = this;
    self.log = function() {
      if(self.gifts.group1.gift1 && self.gifts.group1.gift2 && self.gifts.group1.gift3){
        alert('You have selected too many items');
        return;
      };
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
        'photo': self.photo


      }).then(function(response) {
        console.log('You have successfully added a user!' + response);
      }, function(response) {
        console.log('There was an error, please try again later!');
        console.log(response);
      });

    };

    self.test = function() {
      var response = recaptcha.getResponse();
      $http.post('/apply',{
        'recapResponse': response
      }).then(
        function(res) {
          console.log(res.data);
          console.log('success!');
        }, function(res) {
          console.log(res.data);
          console.log('failure');
        }
      )
    };




    self.addPhoto = function() {
      setTimeout(function(){
         self.photo = document.getElementById('photo').value;
        }, 1000)



    }



  }])
