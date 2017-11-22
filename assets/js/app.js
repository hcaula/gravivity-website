var gravivity = angular.module('gravivity', []);

gravivity.controller('GravivityController', function GravivityController($scope) {
  $scope.prototypes = [
    {
      number: "0.1",
      date: new Date("11/29/2017"),
      description: "The first prototype is finally here! In those versions, we want to test certain design choices.",
      latest: {
        iOS: "www.google.com",
        android: "www.youtube.com",
        version: "0.1.0"
      },
      versions: [
        {
          version: "0.1.0",
          iOS: "www.google.com",
          android: "www.youtube.com",
          additions: [
            "Adds main menu",
            "Adds 15 levels",
            "Adds new animations and sprites",
            "Balances levels"
          ]
        }
      ]
    }
  ];

  var months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dez"];
  $scope.getBrazilDate = function(date) {
    var s = '';
    s += date.getDate() + '-';
    s += date.getMonth() + '-';
    s += date.getUTCFullYear();
    return s;
  }

  $scope.getUSADate = function(date) {
    var s = '';
    console.log(date);
    s += months[date.getMonth()-1] + '. ';
    var day = date.getDate();
    s += day;
    if (day == 1 || day == 21 ) s += "st, ";
    else if(day == 2 || day == 22) s += "nd, ";
    else if(day == 3 || day == 23) s += "rd, ";
    else s+= "th, ";

    s += date.getUTCFullYear();
    return s;
  }
});
