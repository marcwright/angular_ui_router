angular.module('myApp')
	.controller('HomeCtrl', ['$scope', function ($scope) {
			$scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];

      $(function(){
        $(".element").typed({
            strings: ["First sentence.", "Second sentence."],
            typeSpeed: 0
        });
    });
      
	}]);