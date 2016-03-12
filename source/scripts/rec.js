angular.module('UAID-Rec', [])

  .controller('UAID-RecController',  function($http, $location){

    var self = this;

    self.getRecData = function(recId) {
      $http.get('/recipients/data/' + recId)
        .then(
          
        )
    };

  });
