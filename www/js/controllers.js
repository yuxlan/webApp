angular.module('starter.controllers', [])

.controller('BaseCtrl', function ($scope, $rootScope, $ionicActionSheet, $ionicSlideBoxDelegate, $ionicTabsDelegate) {
//  $rootScope.imgUrl = server.imgUrl;
    //slide集合
    $scope.slides = $scope.classify;
    //顶部菜单
    $scope.tabs = $scope.classify;

    $scope.getData = function (c) {
        // 安卓平台不会自动触发加载
        if (ionic.Platform.isAndroid()) {
//          c.doRefresh();
        }
        // 初始化数据，和回调函数 
//      c.isload = false;
//      c.callback = function () {
//          $scope.$broadcast('scroll.refreshComplete');
//          $scope.$broadcast('scroll.infiniteScrollComplete');
//      }
    }
    // 初始化第一个tab的数据
    $scope.getData($scope.classify[0]);


    //重要：因为页面中用了n个tabs组建，所以这里通过每个controller对应的currentTabId来判断哪个tabs来做选中操作。
    var selectTab = function (index) {
        // 优化 使用delegate-handle来操作tabs # currentTabId
        $ionicTabsDelegate.$getByHandle($scope.currentTabId).select(index);
    }
    
    $scope.slideChanged = function (index) {
        var c = $scope.classify[index]
        $scope.getData(c);
        //选中tabs
        selectTab(index);
    };

    $scope.$on('$ionicView.afterEnter', function () {
        //选中tabs
//      selectTab($ionicSlideBoxDelegate.$getByHandle($scope.currentSlide).currentIndex());
        $ionicTabsDelegate.$getByHandle($scope.currentTabId).select(0);
    });

    $scope.selectedTab = function (index) {
        //滑动的索引和速度
        $ionicSlideBoxDelegate.slide(index)
    }
    $scope.$on('$ionicView.beforeEnter', function () {
        $ionicTabsDelegate.showBar(true);
    });
})

.controller('ClothCtrl', function($scope,ClothTabService,$controller,$ionicSlideBoxDelegate, $ionicTabsDelegate, $state, $cordovaBarcodeScanner, $cordovaInAppBrowser) {
    $scope.classify = ClothTabService.all();
//  $scope.slides = items;
//  $scope.tabs = items;
    $scope.currentTabId = "tab1";
    $scope.currentSlide = "slide1";
    $controller('BaseCtrl', { $scope: $scope });
//  var slideIndex = 0;
//
//  $scope.slideChanged = function (index) {
//      $ionicTabsDelegate._instances[1].select(index);
//  };
//  $scope.$on('$ionicView.afterEnter', function () {
//      $ionicTabsDelegate._instances[1].select($ionicSlideBoxDelegate.currentIndex());
//  });
//
//  $scope.selectedTab = function (index) {
//      //滑动的索引和速度
//      $ionicSlideBoxDelegate.slide(index)
//  };
    
//  var page = 1,isLock=false;
    
    // 下拉刷新
    $scope.doRefresh = function () {
    	$scope.slides = $scope.classify;
//      $scope.loadMore();
    };
    
    // 上拉加载
    $scope.loadMore = function () {
    	$scope.slides = ClothTabService.all();
//      if(isLock)return;
//      isLock=true;
//      ClothTabService.getList(classify[0].url, page).success(function (response) {
//          console.log(page)
//          if (response.tngou.length == 0) {
//              $scope.hasmore = true;
//              return;
//          }
//          page++;
//          $scope.items = $scope.items.concat(response.tngou);
//      }).finally(function (error) {
//          isLock = false;
//          $scope.$broadcast('scroll.infiniteScrollComplete');
//          $scope.$broadcast('scroll.refreshComplete');
//      });
    };
    
    $scope.goDetails = function (content) {
	    $state.go('tab.cloth-details', { id:content.id, title:content.title });
	};
	
	// 扫描二维码
	$scope.scanner = function () {
	  $cordovaBarcodeScanner
	    .scan()
	    .then(function (barcodeData) {
	      alert(barcodeData.text);
	      //打开浏览器 target = _self | _blank | _system
	      var target = "_system";
	      $cordovaInAppBrowser.open(barcodeData.text, target, {
	        location: 'no',
	        clearcache: 'no',
	        toolbar: 'no'
	      }).then(function (event) {
	        // success
	      })
	        .catch(function (event) {
	          alert("inAppBrowser error:" + angular.toJson(event));
	        });
	    }, function (error) {
	      alert("cordovaBarcodeScanner error:" + angular.toJson(error)); 
	    });
	}
 })

.controller('ClothDetailCtrl', function($scope, ClothTabService, $stateParams, $state, $ionicActionSheet) {
	$scope.clothList = ClothTabService.get($stateParams.id,$stateParams.title);
	$scope.goBack = function() {
	    $state.go('tab.cloth');
	}
	
	$scope.share = function(){
//      var user = AccountService.getCacheUser()
//      if (user == undefined) {
//          $ionicLoading.show({
//              template: '请登录!',
//              noBackdrop: true
//          })
//          $timeout(function () {
//              $ionicLoading.hide();
//          }, 1000)
//          return;
//      }
        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                { text: '<i class="fa fa-weibo"></i>' },
                { text: '<i class="fa fa-weixin"></i>' },
                { text: '<i class="fa fa-qq"></i>' }
            ],
            // destructiveText: 'Delete',
//          titleText: '收藏',
//          cancelText: 'Cancel',
//          cancel: function () {
//              // add cancel code..
//          },
//          buttonClicked: function (index) {
//              console.log(index);
//              FavService.addFav(id, type, title).success(function (response) {
//                  if (response.status == true) {
//                      $ionicLoading.show({
//                          template: '收藏成功',
//                          noBackdrop: true
//                      })
//                  } else {
//                      $ionicLoading.show({
//                          template: '收藏失败',
//                          noBackdrop: true
//                      })
//                  }
//                  $timeout(function () {
//                      $ionicLoading.hide();
//                  }, 1000)
//              });
//              return true;
//          }
        });
	}
})

.controller('FoodCtrl', function($scope,FoodTabService,$ionicSlideBoxDelegate, $ionicTabsDelegate, $controller,$state) {
	$scope.classify = FoodTabService.all();
//  $scope.slides = items;
//  $scope.tabs = items;
    $scope.currentTabId = "tab2";
    $scope.currentSlide = "slide2";
    $controller('BaseCtrl', { $scope: $scope });
//  var items = FoodTabService.getFoodClassify();
//  $scope.slides = items;
//  $scope.tabs = items;
//  $scope.currentTabId = "tabFood";
//  $scope.currentSlide = "slideFood";
//
//  var slideIndex = 1;
//
//  $scope.slideChanged = function (index) {
//      $ionicTabsDelegate._instances[1].select(index);
//  };
//  $scope.$on('$ionicView.afterEnter', function () {
//      $ionicTabsDelegate._instances[1].select($ionicSlideBoxDelegate.currentIndex());
//  });
//
//  $scope.selectedTab = function (index) {
//      //滑动的索引和速度
//      $ionicSlideBoxDelegate.slide(index)
//  }    

// 下拉刷新
    $scope.doRefresh = function () {
    	$scope.slides = $scope.classify;
    };
    
    // 上拉加载
    $scope.loadMore = function () {
    	$scope.slides = FoodTabService.all();
    };
    
    $scope.goDetails = function (content) {
	   $state.go('tab.food-details', { id:content.id, title:content.title });
	};
  })

.controller('FoodDetailCtrl', function($scope, FoodTabService, $stateParams, $state, $ionicActionSheet) {
	$scope.foodList = FoodTabService.get($stateParams.id,$stateParams.title);
	$scope.goBack = function() {
	    $state.go('tab.food');
	}
	
	$scope.share = function(){
//      var user = AccountService.getCacheUser()
//      if (user == undefined) {
//          $ionicLoading.show({
//              template: '请登录!',
//              noBackdrop: true
//          })
//          $timeout(function () {
//              $ionicLoading.hide();
//          }, 1000)
//          return;
//      }
        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                { text: '<i class="fa fa-weibo"></i>' },
                { text: '<i class="fa fa-weixin"></i>' },
                { text: '<i class="fa fa-qq"></i>' }
            ],
            // destructiveText: 'Delete',
//          titleText: '收藏',
//          cancelText: 'Cancel',
//          cancel: function () {
//              // add cancel code..
//          },
//          buttonClicked: function (index) {
//              console.log(index);
//              FavService.addFav(id, type, title).success(function (response) {
//                  if (response.status == true) {
//                      $ionicLoading.show({
//                          template: '收藏成功',
//                          noBackdrop: true
//                      })
//                  } else {
//                      $ionicLoading.show({
//                          template: '收藏失败',
//                          noBackdrop: true
//                      })
//                  }
//                  $timeout(function () {
//                      $ionicLoading.hide();
//                  }, 1000)
//              });
//              return true;
//          }
        });
	}
})

.controller('HouseCtrl', function($scope,HouseTabService,$ionicSlideBoxDelegate, $state,$ionicTabsDelegate, $controller) {
	$scope.classify = HouseTabService.all();
//  $scope.slides = items;
//  $scope.tabs = items;
    $scope.currentTabId = "tab3";
    $scope.currentSlide = "slide3";
    $controller('BaseCtrl', { $scope: $scope });
//  var items = HouseTabService.getHouseClassify();
//  $scope.slides = items;
//  $scope.tabs = items;
//  $scope.currentTabId = "tabHouse";
//  $scope.currentSlide = "slideHouse";
//
//  var slideIndex = 2;
//
//  $scope.slideChanged = function (index) {
//      $ionicTabsDelegate._instances[1].select(index);
//  };
//  $scope.$on('$ionicView.afterEnter', function () {
//      $ionicTabsDelegate._instances[1].select($ionicSlideBoxDelegate.currentIndex());
//  });
//
//  $scope.selectedTab = function (index) {
//      //滑动的索引和速度
//      $ionicSlideBoxDelegate.slide(index)
//  }
// 下拉刷新
    $scope.doRefresh = function () {
    	$scope.slides = $scope.classify;
    };
    
    // 上拉加载
    $scope.loadMore = function () {
    	$scope.slides = HouseTabService.all();
    };
    
    $scope.goDetails = function (content) {
	   $state.go('tab.house-details', { id:content.id, title:content.title });
	};
 })

.controller('HouseDetailCtrl', function($scope, HouseTabService, $stateParams, $state, $ionicActionSheet) {
	$scope.houseList = HouseTabService.get($stateParams.id,$stateParams.title);
	$scope.goBack = function() {
	    $state.go('tab.house');
	}
	
	$scope.share = function(){
//      var user = AccountService.getCacheUser()
//      if (user == undefined) {
//          $ionicLoading.show({
//              template: '请登录!',
//              noBackdrop: true
//          })
//          $timeout(function () {
//              $ionicLoading.hide();
//          }, 1000)
//          return;
//      }
        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                { text: '<i class="fa fa-weibo"></i>' },
                { text: '<i class="fa fa-weixin"></i>' },
                { text: '<i class="fa fa-qq"></i>' }
            ],
            // destructiveText: 'Delete',
//          titleText: '收藏',
//          cancelText: 'Cancel',
//          cancel: function () {
//              // add cancel code..
//          },
//          buttonClicked: function (index) {
//              console.log(index);
//              FavService.addFav(id, type, title).success(function (response) {
//                  if (response.status == true) {
//                      $ionicLoading.show({
//                          template: '收藏成功',
//                          noBackdrop: true
//                      })
//                  } else {
//                      $ionicLoading.show({
//                          template: '收藏失败',
//                          noBackdrop: true
//                      })
//                  }
//                  $timeout(function () {
//                      $ionicLoading.hide();
//                  }, 1000)
//              });
//              return true;
//          }
        });
	}
})

.controller('WalkCtrl', function($scope,WalkTabService,$ionicSlideBoxDelegate, $ionicTabsDelegate, $controller) {
	$scope.classify = WalkTabService.getWalkClassify();
//  $scope.slides = items;
//  $scope.tabs = items;
    $scope.currentTabId = "tab4";
    $scope.currentSlide = "slide4";
    $controller('BaseCtrl', { $scope: $scope });
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


//  var items = WalkTabService.getWalkClassify();
//  $scope.slides = items;
//  $scope.tabs = items;
//  $scope.currentTabId = "tabWalk";
//  $scope.currentSlide = "slideWalk";
//
//  var slideIndex = 3;
//
//  $scope.slideChanged = function (index) {
//      $ionicTabsDelegate._instances[1].select(index);
//  };
//  $scope.$on('$ionicView.afterEnter', function () {
//      $ionicTabsDelegate._instances[1].select($ionicSlideBoxDelegate.currentIndex());
//  });
//
//  $scope.selectedTab = function (index) {
//      //滑动的索引和速度
//      $ionicSlideBoxDelegate.slide(index)
//  }
//$scope.remove = function(walks) {
//  walk.remove(walks);
//};        
})

.controller('WalkDetailCtrl', function($scope, $stateParams, Walk) {
//$scope.walk = Walk.get($stateParams.walkId);
})


.controller('AccountCtrl', function ($scope, $rootScope, $ionicPopup, $ionicModal, $state, $ionicTabsDelegate, $ionicSlideBoxDelegate, AccountService) {

    $rootScope.isLogin = false;
    $ionicModal.fromTemplateUrl('templates/loginReg.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.loginData = {
        name: '',
        password: ''
    }

    $scope.regData = {
        account: '',
        email: '',
        password: ''
    }

    $scope.user = {
        account: "未登陆"
    }
    $scope.login = function () {
        AccountService.login($scope.loginData.name, $scope.loginData.password, function (user) {
            //account avatar domain  email  gender id integral isemail isphone status time title weiboid
            $scope.user = user;
            $rootScope.isLogin = true;
            $scope.modal.hide();
            $state.go('tab.account-details');
        });
    }
    $scope.doRefresh = function () {
        AccountService.user(function (result) {
            if (result.status == false) {
                $ionicPopup.alert({
                    title: '提示',
                    template: result.msg
                });
            }
            $scope.user = result;
            $scope.$broadcast('scroll.refreshComplete');
        });
    }

    $scope.goDetails = function () {
        if ($rootScope.isLogin == false) {
            $scope.modal.show();
        } else {
            $state.go('tab.account-details');
            $ionicTabsDelegate.showBar(false);
        }
    }

    $scope.$on('$ionicView.beforeEnter', function () {
//      var user = AccountService.getCacheUser();
//      if (user == undefined) {
//          $rootScope.isLogin = false;
//          $scope.user = {};
//      } else {
//          if (user.status != false) {
//              $rootScope.isLogin = true;
//              $scope.user = user;
//          }
//      }
//      $ionicTabsDelegate.showBar(true);
    });


    var accountTab = $ionicTabsDelegate.$getByHandle('accountTab');
    var accountSlide = $ionicSlideBoxDelegate.$getByHandle('accountSlide');

    $scope.register = function () {
        AccountService.reg($scope.regData.account, $scope.regData.email, $scope.regData.password);
    }

    $scope.accountSelectedTab = function (index) {
        accountSlide.slide(index);
    }
    $scope.accountSlideChanged = function (index) {
        accountTab.select(accountSlide.currentIndex());
    };
})
.controller('AccountDetailsCtrl', function ($scope, $rootScope, $ionicHistory,$state, AccountService) {
    // 注销登陆
    $scope.logout = function () {
        // 删除本地缓存
//      window.localStorage.removeItem(cache.user);
//      window.localStorage.removeItem(cache.token);
//      $rootScope.isLogin = false;

//      $ionicHistory.goBack();

        $state.go('tab.account');
    }
//  $scope.user = AccountService.getCacheUser();
    $scope.doRefresh = function () {
        AccountService.user(function (user) {
            $scope.user = user;
            $rootScope.isLogin = true;
            $scope.$broadcast('scroll.refreshComplete');
        });
    }
});
