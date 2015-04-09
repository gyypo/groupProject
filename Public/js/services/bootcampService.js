var app = angular.module('group');

app.service('bootcampService', function($http, $q) {

	this.getUsers = function () {
		var dfd = $q.defer() 
		$http({
			method: 'GET',
			url: 'api/bootcampUsers'
		}).then(function(res) {
			var userArr = res.data
			var unverified = [];
			var verified = [];
			for (var i = 0; i < userArr.length; i++) {
				if(userArr[i].verified === false) {
					unverified.push(userArr[i])
				} else {
					verified.push(userArr[i])
				}
			}
			return dfd.resolve([unverified, verified])
		})
	return dfd.promise
	}

	this.getUser = function () {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: '/api/bootcamp/user'
		}).then(function(res) {
			if(res.status === 200) {
				dfd.resolve(res.data)
			} else {
				dfd.resolve("There was an error")
			}
		})
		return dfd.promise
	}

	this.verifyStudent = function(student) {
		return $http({
				method: 'POST',
				url: 'api/bootcamp/verify/student',
				data: student
		})
	}

	this.unverifyStudent = function(student) {
		return $http({
				method: 'POST',
				url: 'api/bootcamp/unverify/student',
				data: student
		})
	}
});