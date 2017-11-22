var gravivity = angular.module('gravivity', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
gravivity.controller('GravivityController', function GravivityController($scope) {
  $scope.prototypes = [
    {
      number: 1,
      date: new Date("11-29-2017"),
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
        },
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
        },
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
    },
    {
      number: 1,
      date: new Date("11-29-2017"),
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
        },
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
        },
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
    },
    {
      number: 1,
      date: new Date("11-29-2017"),
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
        },
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
        },
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
    },
    {
      number: 1,
      date: new Date("11-29-2017"),
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
        },
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
        },
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

  $scope.getBrazilDate = function(date) {
    var s = '';
    s += date.getDate() + '-';
    s += date.getMonth() + '-';
    s += date.getUTCFullYear();
    return s;
  }

  $scope.getUSADate = function(date) {
    var s = '';
    s += date.getMonth() + '-';
    s += date.getDate() + '-';
    s += date.getUTCFullYear();
    return s;
  }
});
