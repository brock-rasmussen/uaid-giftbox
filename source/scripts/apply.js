angular.module('UAID-Apply', ['vcRecaptcha', 'ngFileUpload'])
  .controller('UAID-ApplyController', ['$http', 'vcRecaptchaService', 'Upload', function($http, recaptcha, Upload){
    var self = this;
    self.log = function() {
      console.log(self.ethnicity)
    };

  }])
