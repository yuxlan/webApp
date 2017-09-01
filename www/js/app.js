// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.filter', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
	
	// 用于修改安卓tab导航居下，参数里边传入$ionicConfigProvider
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');
  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');
  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-ios-arrow-thin-back');
  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.cloth', {
    url: '/cloth',
    views: {
      'tab-cloth': {
        templateUrl: 'templates/tab-cloth.html',
        controller: 'ClothCtrl'
      }
    }
  })
  
  .state('tab.cloth-details', {
    url: '/tab/cloth-details/:id/:title',
    views: {
      'tab-cloth': {
        templateUrl: 'templates/cloth-detail.html',
        controller: 'ClothDetailCtrl'
      }
    }
  })
  
  .state('tab.food', {
    url: '/food',
    views: {
      'tab-food': {
        templateUrl: 'templates/tab-food.html',
        controller: 'FoodCtrl'
      }
    }
  })  
  
  .state('tab.food-details', {
    url: '/tab/food-details/:id/:title',
    views: {
      'tab-food': {
        templateUrl: 'templates/food-detail.html',
        controller: 'FoodDetailCtrl'
      }
    }
  })
  
  .state('tab.house', {
    url: '/house',
    views: {
      'tab-house': {
        templateUrl: 'templates/tab-house.html',
        controller: 'HouseCtrl'
      }
    }
  })
  
  .state('tab.house-details', {
    url: '/tab/house-details/:id/:title',
    views: {
      'tab-house': {
        templateUrl: 'templates/house-detail.html',
        controller: 'HouseDetailCtrl'
      }
    }
  })

  .state('tab.walk', {
      url: '/walk',
      views: {
        'tab-walk': {
          templateUrl: 'templates/tab-walk.html',
          controller: 'WalkCtrl'
        }
      }
    })
    .state('tab.walk-detail', {
      url: '/walk/:walkId',
      views: {
        'tab-walk': {
          templateUrl: 'templates/walk-detail.html',
          controller: 'WalkDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  
  .state('tab.account-details', {
    url: '/account/detail',
    views: {
      'tab-account': {
        templateUrl: 'templates/account-detail.html',
        controller: 'AccountDetailsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/cloth');

});
