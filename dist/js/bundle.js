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
    $scope.active = 0;
    $scope.tabs = [];

    $http({
        method: 'GET',
        url: '/mock/main/controllers/main.controller.mock.json'
    }).then(function successCallback(response) {
        for (var i = 0; i < response.data.length; i++) {
            $scope.tabs[i] = {
                index: i,
                title: response.data[i].title,
                content: $sce.trustAsHtml(response.data[i].content)
            };
        }
    });

    $scope.controls = {};
    $scope.controls.add = {
        form: {
            title: 'New Tab',
            content: '<h1>New Content</h1>'
        },
        reset: function reset() {
            this.form = {
                title: 'New Tab',
                content: '<h1>New Content</h1>'
            };
        },
        add: function add() {
            var index = $scope.tabs.length;
            $scope.tabs[index] = {
                index: index,
                title: this.form.title,
                content: $sce.trustAsHtml(this.form.content)
            };
        }
    };
    $scope.controls.change = {
        form: {
            index: 0,
            title: null,
            content: null
        },
        reset: function reset() {
            this.form = {
                index: $scope.tabs[0].index,
                title: null,
                content: null
            };
        },
        get: function get() {
            this.form.title = $scope.tabs[this.form.index].title;
            this.form.content = $scope.tabs[this.form.index].content.$$unwrapTrustedValue();
        },
        save: function save() {
            $scope.tabs[this.form.index].title = this.form.title;
            $scope.tabs[this.form.index].content = $sce.trustAsHtml(this.form.content);
        }
    };
    $scope.controls.remove = {
        form: {
            index: 0
        },
        reset: function reset() {
            this.form = {
                index: $scope.tabs[0].index
            };
        },
        remove: function remove() {
            $scope.$broadcast('tabs.remove', this.form.index, function (index) {
                $scope.tabs.splice(index, 1);
                $scope.controls.add.reset();
                $scope.controls.change.reset();
                $scope.controls.remove.reset();
                $scope.active = $scope.tabs[0].index;
            });
        }
    };

    $scope.onChangeTab = function (newTab, oldTab) {
        console.info('Change tab from ', oldTab.title(), ' to ', newTab.title());
    };
    $scope.onAdd = function (newTab) {
        console.info('Add new tab', newTab.title());
    };
    $scope.onRemove = function (removeTab) {
        console.info('Remove tab', removeTab.title());
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
    this.controller = ['$scope', function ($scope) {
      $scope.$emit('tab.add', function () {
        return $scope.title;
      });
    }];
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

      $scope.$on('tab.add', function (event, titleFn) {
        $scope.$emit('tabs.add', titleFn, function (tab) {
          $scope.tab = tab;
        });
      });
    }];
  }

  _createClass(Tab, null, [{
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
      onChangeTab: '=',
      onRemove: '=',
      onAdd: '='
    };
    this.replace = true;
    this.controller = ['$scope', function ($scope) {
      $scope.tabsBar = [];
      $scope.active = $scope.active || 0;

      $scope.$on('tabs.add', function (event, titleFn, tabCallback) {

        var index = $scope.tabsBar.length;
        var item = {
          title: titleFn,
          index: index,
          active: function active() {
            return index == $scope.active;
          }
        };
        $scope.tabsBar.push(item);
        tabCallback(item);
        if (typeof $scope.onAdd == 'function') {
          $scope.onAdd(item);
        }
      });

      $scope.$on('tabs.remove', function (event, index, ctrlCallback) {
        if (typeof $scope.onRemove == 'function') {
          $scope.onRemove($scope.tabsBar[index]);
        }
        $scope.tabsBar.splice(index, 1);
        if (typeof ctrlCallback == 'function') {
          ctrlCallback(index);
        }
      });

      $scope.open = function (newIndex) {
        var oldIndex = $scope.active;
        $scope.active = newIndex;

        if (typeof $scope.onChangeTab == 'function') {
          $scope.onChangeTab($scope.tabsBar[newIndex], $scope.tabsBar[oldIndex]);
        }
      };
    }];
  }

  _createClass(Tabs, null, [{
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
