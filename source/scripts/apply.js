angular.module('UAID-Apply', ['vcRecaptcha', 'ngFileUpload'])
  .controller('UAID-ApplyController', ['$http', 'vcRecaptchaService', 'Upload', '$scope', function($http, recaptcha, Upload, $scope){
    var self = this;
    self.log = function() {

      if(self.group1Counter > 2 || self.group4Counter > 2) {
        alert('You have selected too many gifts, please confirm how many gifts you have selected.');
        return;
      }
      self.groupGift();
      //recaptcha
      var response = recaptcha.getResponse();
      var payload = {
        'recapResponse': response,
        'fname': self.fname,
        'lname': self.lname,
        'address': self.address,
        'age': self.age,
        'intage': self.intage,
        'ethnicity': self.ethnicity,
        'contactName': self.contactName,
        'contactPhone': self.contactPhone,
        'contactEmail': self.contactEmail,
        'contactRelationship': self.contactRelationship,
        'contactSecPhone': self.contactSecPhone,
        'contactSecRelationship': self.contactSecRelationship,
        'photo': self.photo,
        'gifts': self.giftsArr,
        'wrapped': self.wrapped
      };
      if(self.agencyName){
        payload.agencyName = self.agencyName
      };
      if(self.agencyLocation){
        payload.agencyLocation = self.agencyLocation
      };
      if(self.agencyPhone){
        payload.agencyPhone = self.agencyPhone
      };

      $http.post('/apply', payload).then(function(response) {
        console.log('You have successfully added a user!' + response);
        window.location = "/apply/thanks";
      }, function(response) {
        console.log('There was an error, please try again later!');
        console.log(response);
      });

    };
    self.gifts = {};
    self.wrapped = false;
    self.gifts.sizes = [{
      value: 'XS',
      label: 'Extra Small'
    },{
      value: 'S',
      label: 'Small'
    },{
      value: 'M',
      label: 'Medium'
    },{
      value: 'L',
      label: 'Large'
    },{
      value: 'XL',
      label: 'Extra Large'
    },{
      value: '2XL',
      label: '2x Large'
    },{
      value: '3XL',
      label: '3x Large'
    },{
      value: '4XL',
      label: '4x Large'
    },{
      value: '5XL',
      label: '5x Large'
    },{
      value: '6XL',
      label: '6x Large'
    }];

    self.addPhoto = function() {
      setTimeout(function(){
         self.photo = document.getElementById('photo').value;
        }, 1000)
    };

    self.giftsArr = [];
    self.groupGift = function() {
      var giftItem = {};
      for(var x in self.gifts) {
        for(var y in self.gifts[x])
          if(self.gifts[x][y].name) {
            giftItem = {
              'gift': self.gifts[x][y].name,
            };
          if(self.gifts[x][y].size) {
            giftItem.size = self.gifts[x][y].size;
          };
          if(self.gifts[x][y].sizenum){
            giftItem.sizenum = self.gifts[x][y].sizenum;
          };
          if(self.gifts[x][y].genre){
            giftItem.genre = self.gifts[x][y].genre;
          };
          self.giftsArr.push(giftItem);
          giftItem = {};
          }
      };
    };

    self.group1Counter = 0;
    self.group4Counter = 0;
    self.giftCheck = function(model, counter, group) {
        if(model){
          counter += 1
        } else {
          counter -= 1
        };
      if(group === 1) {
        self.group1Counter = counter;
      };
      if(group === 4) {
        self.group4Counter = counter;
      }
    }
  }])
