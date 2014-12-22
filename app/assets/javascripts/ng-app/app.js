
angular
	.module('myApp', [
		'ngAnimate',
		'ui.router',
		'templates'
	])
	.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

		/**
		 * Route and States
		 */
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'home.html',
				controller: 'HomeCtrl'
			})
			// an abstract state that just serves as a
			// parent for the below child states
			.state('dashboard', {
				abstract: true,
				url: '/dashboard',
				templateUrl: 'dashboard/layout.html'
			})
				// the default route when someone hits dashboard
				.state('dashboard.one', {
					url: '',
					templateUrl: 'dashboard/one.html'
				})
				// this is /dashboard/two
				.state('dashboard.two', {
					url: '/two',
					templateUrl: 'dashboard/two.html'
				})
				// this is /dashboard/three
				.state('dashboard.three', {
					url: '/three',
					templateUrl: 'dashboard/three.html'
				})
				.state('resume', {
				abstract: true,
				url: '/resume',
				templateUrl: 'resume/layout.html'
			})
				// the default route when someone hits dashboard
				.state('resume.four', {
					url: '',
					templateUrl: 'resume/four.html'
				})
				// this is /dashboard/two
				.state('resume.five', {
					url: '/five',
					templateUrl: 'resume/five.html'
				})
				// this is /dashboard/three
				.state('resume.six', {
					url: '/six',
					templateUrl: 'resume/six.html'
				})
				.state('projects', {
				abstract: true,
				url: '/projects',
				templateUrl: 'projects/layout.html'
			})
				// the default route when someone hits dashboard
				// this is /dashboard/two
				.state('projects.halfgap', {
					url: '',
					templateUrl: 'projects/halfgap.html'
				})
				.state('projects.ozymandias', {
					url: '/ozymandias',
					templateUrl: 'projects/ozymandias.html'
				});
				// this is /dashboard/three

		// default fallback route
		$urlRouterProvider.otherwise('/');

		// enable HTML5 mode for SEO
		$locationProvider.html5Mode(true);

	});