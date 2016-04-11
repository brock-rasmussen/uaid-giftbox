angular.module('UAID-Giftbox', [])

  .controller('UAID-Controller',  function($http, $location, $anchorScroll){

    getRecipients();
    var self = this;
    this.recipsArr = [];
    this.limit = 4;
    self.recipsIds = [];
    function getRecipients() {
        $http.get('/home')
        .then(
          function(res){
            console.log(res.data);
            self.recips = res.data;
            self.recipsIds = Object.keys(self.recips);
            for(var x in self.recips){
              self.recipsArr.push(self.recips[x]);
            }
          });
    };

    this.seeMoreRecips = function() {
      if(self.limit < 8) {
        self.limit = 8;
      }
    };

    self.viewRecip = function(recId) {
      $location.url('recipients/' + recId);
    };

    self.gotoRecips = function() {
      $location.hash('applicants');
      $anchorScroll();
    };

  });
