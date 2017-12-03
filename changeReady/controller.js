var cr = angular.module('changeReady', []);
cr.controller('FirstController', function($scope) {
	/*
  $scope.first = 'Some';
  $scope.last = 'One';
  $scope.heading = 'Message: ';
  $scope.updateMessage = function() {
    $scope.message = 'Hello ' + $scope.first.toUpperCase() +' '+ $scope.last.toUpperCase() + '!';
  };*/
  $scope.sendMessage = function(comment) {
  		console.log('sendMessage');
   };
});