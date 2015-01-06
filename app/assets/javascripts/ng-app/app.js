
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
			.state('dashboard', {
				abstract: true,
				url: '/dashboard',
				templateUrl: 'dashboard/layout.html'
			})
				.state('dashboard.one', {
					url: '',
					templateUrl: 'dashboard/one.html'
				})
				.state('dashboard.two', {
					url: '/two',
					templateUrl: 'dashboard/two.html'
				})
				.state('dashboard.three', {
					url: '/three',
					templateUrl: 'dashboard/three.html'
				})
				.state('resume', {
				abstract: true,
				url: '/resume',
				templateUrl: 'resume/layout.html'
			})
				.state('resume.four', {
					url: '',
					templateUrl: 'resume/four.html'
				})
				.state('resume.five', {
					url: '/five',
					templateUrl: 'resume/five.html'
				})
				.state('resume.six', {
					url: '/six',
					templateUrl: 'resume/six.html'
				})
				.state('projects', {
				abstract: true,
				url: '/projects',
				templateUrl: 'projects/layout.html'
			})
				.state('projects.halfgap', {
					url: '',
					templateUrl: 'projects/halfgap.html'
				})
				.state('projects.ozymandias', {
					url: '/ozymandias',
					templateUrl: 'projects/ozymandias.html'
				})
				.state('projects.keyfree', {
					url: '/keyfree',
					templateUrl: 'projects/keyfree.html'
				})
				.state('projects.instagram', {
					url: '/instagram',
					templateUrl: 'projects/instagram.html'
				})
				.state('projects.marketing', {
					url: '/marketing',
					templateUrl: 'projects/marketing.html'
				})
				.state('projects.zen', {
					url: '/zen',
					templateUrl: 'projects/zen.html'
				})
				.state('projects.groovv', {
					url: '/groovv',
					templateUrl: 'projects/groovv.html'
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