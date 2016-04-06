angular.module('UAID-Rec', [])

  .controller('UAID-RecController',  function($http, $location){

    var self = this;
    self.recData;
    self.subApp = false;
    self.recLink = window.location.href;
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

    self.adopt = function() {
      $http.get('/recipients/data/' + self.recId)
        .then(function(res) {
          self.recData = res.data;
          if(self.recData.approved !== 1){
            alert("This user has already been adopted, please pick another.");
            return
          } else {
            $http.post('/recipients', {
              'recid': self.recId,
              'adopterFName': self.adopterFName,
              'adopterLName': self.adopterLName,
              'adopterEmail': self.adopterEmail,
              'recData': self.recData,
              'recLink': self.recLink
            }).then(function(res) {
              console.log('Successfully adopted');
              if(res.data.adopted == true) {
                self.subApp = true;
              }
            })
          }
        });

    };

  })
