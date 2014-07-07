'use strict';

angular.module('appToTakeOverTheWorldApp')
.controller('MainCtrl', ['$scope', 'Terminator', function ($scope, Terminator) {

	$scope.terminators = Terminator.all;

	$scope.createTerminator = function(){
		Terminator.create($scope.terminator).then(function(data){
			$scope.terminator.name = ''
		})
	};

	$scope.deleteTerminator = function(terminatorId){
		Terminator.delete(terminatorId).then(function(data){
			console.log('Terminator deleted!')
		})
	};
}]);