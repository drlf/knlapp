angular.module('starter', [ 'ionic', 'starter.controllers' ])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('app', {
		url : "/app",
		templateUrl : "templates/menu.html"
	})

	.state('app.listfile', {
		url : "/listfile?path",
		views : {
			'menuContent' : {
				templateUrl : "templates/listfile.html",
				controller : 'FilelistsCtrl'
			}
		}
	})

	.state('app.viewfie', {
		url : "/viewfile?path",
		views : {
			'menuContent' : {
				templateUrl : "templates/viewfile.html",
				controller : 'FileviewCtrl'
			}
		}
	});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/listfile');
});
