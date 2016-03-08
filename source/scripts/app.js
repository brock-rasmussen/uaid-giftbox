angular.module('UAID-Giftbox', [])

  .controller('UAID-Controller',  function($http){

    getRecipients();
    var self = this;
    this.userName = "";
    this.userEmail = "";
    this.recipsArr = [];
    this.limit = 4;

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
    };


  });
