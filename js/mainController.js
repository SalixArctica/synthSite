var synthApp = angular.module('synthApp', []);

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida nisl risus, et commodo ex rutrum non. Aenean tincidunt tincidunt lectus at maximus. Suspendisse vitae mi ullamcorper";

synthApp.controller('synthsController',['$scope', function($scope) //brackets are to protect dependencies from minification
{
  $scope.synths=[
    {
      name: "VCO",
      price: 45,
      img: "img/VCO-1.png",
      details: lorem,
      kitPrice: 20
    },
    {
      name: "LFO",
      price: 40,
      img: "img/LFO-1.png",
      details: lorem,
      kitPrice: 20
    },
    {
      name: "SEQ-3",
      price: 80,
      img: "img/SEQ-3.png",
      details: lorem,
      kitPrice: 20
    },
    {
      name: "VCA",
      price: 20,
      img: "img/VCA.png",
      details: lorem,
      kitPrice: 20
    }
  ];

}]);
