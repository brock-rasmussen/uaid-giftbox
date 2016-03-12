angular.module('UAID-Rec', [])

  .controller('UAID-RecController',  function($http, $location){

    var self = this;
    self.recData;
    self.recId = window.location.pathname.replace('/recipients/', '');
    console.log(self.recId);
    self.getRecData = function(recId) {
      $http.get('/recipients/data/' + recId)
        .then(function(res) {
            console.log(res.data);
            self.recData = res.data;
        })

    };

    self.getRecData(self.recId);

  })
