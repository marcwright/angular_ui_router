
angular
	.module('myApp', [
		'ngAnimate',
		'ui.router',
		'templates',
		'ui.bootstrap'
	])
	// .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
      function ($stateProvider, $urlRouterProvider, $locationProvider ) {

		/**
		 * Route and States
		 */
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home.html',
				controller: 'HomeCtrl'
			})
			  .state('resume', {
					abstract: true,
					url: '/resume',
					templateUrl: 'resume/layout.html'
			})
				.state('resume.cv', {
					url: '',
					templateUrl: 'resume/cv.html'
				})
				 .state('work', {
					abstract: true,
					url: '/work',
					templateUrl: 'work/layout.html'
			})
				.state('work.work', {
					url: '',
					templateUrl: 'work/work.html'
				})
				.state('contact', {
				abstract: true,
				url: '/contact',
				templateUrl: 'contact/layout.html'
			})
				.state('contact.contact', {
					url: '',
					templateUrl: 'contact/contact.html'
				});

		// default fallback route
		$urlRouterProvider.otherwise('/');

		// enable HTML5 mode for SEO
		$locationProvider.html5Mode(true);

	}]);