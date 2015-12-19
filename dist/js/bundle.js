(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesJs = require('./modules.js');

var _modulesJs2 = _interopRequireDefault(_modulesJs);

var _tabsModuleJs = require('./tabs/module.js');

var _tabsModuleJs2 = _interopRequireDefault(_tabsModuleJs);

var _mainModuleJs = require('./main/module.js');

var _mainModuleJs2 = _interopRequireDefault(_mainModuleJs);

},{"./main/module.js":3,"./modules.js":4,"./tabs/module.js":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MainController = function MainController($scope, $http, $sce) {
    _classCallCheck(this, MainController);

    $scope.title = "ES6 Angular Tabs";
    $scope.active = 1;
    $scope.tabs = [];
    $http({
        method: 'GET',
        url: '/mock/main/controllers/main.controller.mock.json'
    }).then(function successCallback(response) {
        for (var i = 0; i < response.data.length; i++) {
            $scope.tabs[i] = {
                title: response.data[i].title,
                content: $sce.trustAsHtml(response.data[i].content)
            };
        }
    });

    $scope.onInitTabs = function (tabs) {
        //$scope.tabs = tabs;
        console.log(tabs);
    };
};

MainController.$inject = ['$scope', '$http', '$sce'];

exports.MainController = MainController;

},{}],3:[function(require,module,exports){
'use strict';

var _controllersMainControllerJs = require('./controllers/main.controller.js');

angular.module('main').controller('MainController', _controllersMainControllerJs.MainController);

},{"./controllers/main.controller.js":2}],4:[function(require,module,exports){
'use strict';

angular.module('app', ['main', 'fTabs']);

angular.module('app.templates', []);
angular.module('main', ['app.templates']);
angular.module('fTabs', ['app.templates']);

},{}],5:[function(require,module,exports){
'use strict';

var _tabsDirectiveJs = require('./tabs.directive.js');

var _tabTabDirectiveJs = require('./tab/tab.directive.js');

var _tabHeaderTabHeaderDirectiveJs = require('./tab/header/tab-header.directive.js');

var _tabContentTabContentDirectiveJs = require('./tab/content/tab-content.directive.js');

angular.module('fTabs').directive('tabs', _tabsDirectiveJs.Tabs.createInstance).directive('tab', _tabTabDirectiveJs.Tab.createInstance).directive('tabHeader', _tabHeaderTabHeaderDirectiveJs.TabHeader.createInstance).directive('tabContent', _tabContentTabContentDirectiveJs.TabContent.createInstance);

},{"./tab/content/tab-content.directive.js":6,"./tab/header/tab-header.directive.js":7,"./tab/tab.directive.js":8,"./tabs.directive.js":9}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TabContent = (function () {
  function TabContent($templateCache, $sce) {
    _classCallCheck(this, TabContent);

    this.restrict = 'E';
    this.require = '^tab';
    this.transclude = true;
    this.replace = true;
    this.scope = true;
    //this.controller = ['$scope', '$sce', function ($scope, $sce) {
    //  //$scope.contentHTML = $sce.trustAsHtml($scope.content);
    //}];
    this.template = $templateCache.get('tabs/tab/content/tab-content.directive.html');
  }

  _createClass(TabContent, null, [{
    key: 'createInstance',
    value: function createInstance($templateCache, $sce) {
      TabContent.instance = new TabContent($templateCache, $sce);
      return TabContent.instance;
    }
  }]);

  return TabContent;
})();

TabContent.createInstance.$inject = ['$templateCache', '$sce'];

exports.TabContent = TabContent;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TabHeader = (function () {
  function TabHeader() {
    _classCallCheck(this, TabHeader);

    this.restrict = 'E';
    this.require = '^tab';
    this.transclude = true;
    this.scope = {
      title: '='
    };
    this.link = function (scope, element, attrs, TabCtrl, transclude) {
      TabCtrl.setTitle(scope.title);
    };
  }

  _createClass(TabHeader, null, [{
    key: 'createInstance',
    value: function createInstance($compile) {
      TabHeader.instance = new TabHeader();
      return TabHeader.instance;
    }
  }]);

  return TabHeader;
})();

exports.TabHeader = TabHeader;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Tab = (function () {
  function Tab($templateCache) {
    _classCallCheck(this, Tab);

    this.restrict = 'E';
    this.transclude = true;
    this.require = '^tabs';
    this.template = $templateCache.get('tabs/tab/tab.directive.html');
    this.scope = true;
    this.replace = true;
    this.controller = ['$scope', function ($scope) {
      this.setTitle = function (title) {
        $scope.title = title;
      };
    }];
  }

  _createClass(Tab, [{
    key: 'link',
    value: function link(scope, element, attrs, TabsCtrl, transclude) {

      TabsCtrl.add(scope.title, function (tab) {
        scope.tab = tab;
      });
    }
  }], [{
    key: 'createInstance',
    value: function createInstance($templateCache) {
      Tab.instance = new Tab($templateCache);
      return Tab.instance;
    }
  }]);

  return Tab;
})();

Tab.createInstance.$inject = ['$templateCache'];

exports.Tab = Tab;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Tabs = (function () {
  function Tabs($templateCache, $compile) {
    _classCallCheck(this, Tabs);

    this.restrict = 'E';
    this.transclude = true;
    this.template = $templateCache.get('tabs/tabs.directive.html');
    this.scope = {
      active: '=',
      onInit: '='
    };
    this.replace = true;
    this.controller = ['$scope', function ($scope) {
      console.log('tabs init');
      $scope.tabs = [];
      $scope.active = $scope.active || 0;

      this.add = function (title, callback) {
        var index = $scope.tabs.length;
        var item = {
          title: title,
          active: index == $scope.active,
          index: index
        };
        $scope.tabs.push(item);
        callback(item);
      };

      $scope.open = function (newIndex) {
        var oldIndex = $scope.active;
        $scope.tabs[oldIndex].active = false;
        $scope.tabs[newIndex].active = true;
        $scope.active = newIndex;
      };
    }];
  }

  _createClass(Tabs, [{
    key: 'link',
    value: function link(scope, element, attrs, TabsCtrl, transclude) {

      scope.onInit({
        tabs: scope.tabs,
        active: scope.active,
        count: scope.tabs.length - 1,
        open: scope.open,
        close: scope.add
      });
    }
  }], [{
    key: 'createInstance',
    value: function createInstance($templateCache, $compile) {
      Tabs.instance = new Tabs($templateCache, $compile);
      return Tabs.instance;
    }
  }]);

  return Tabs;
})();

Tabs.createInstance.$inject = ['$templateCache', '$compile'];

exports.Tabs = Tabs;

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map
