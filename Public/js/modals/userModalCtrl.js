var app = angular.module('group');

app.controller('userModalCtrl', function($scope, $log, $modalInstance, userObj, bootcampsObj) {

	console.log('user info from registerCtrl')
	console.log(userObj);
	
	$scope.experience = {
		level:'Never Coded'
	}

	$scope.submit = function  () {
		var newUser = {
			bio: $scope.bio,
			bootcamp: $scope.bootcamp,
			experience: $scope.experience,
			skills: $scope.skills,
			gradYear: $scope.gradYear
		}
		
		$modalInstance.close(newUser)
		}

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	}

});