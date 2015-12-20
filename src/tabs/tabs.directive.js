/*jslint es6: true */
class Tabs {
  constructor($templateCache) {
    this.restrict = 'E';
    this.transclude = true;
    this.template = $templateCache.get('tabs/tabs.directive.html');
    this.scope = {
      active: '=',
      onChangeTab: '=',
      onRemove: '=',
      onAdd: '=',
      onInit: '='
    };
    this.replace = true;
    this.controller = ['$scope', function ($scope) {
      /**
       * Array of tabs in bar
       * @type {Array}
       */
      $scope.tabsBar = [];
      /**
       * Active tab. Linked with controller.active
       * @type {number}
       */
      $scope.active = $scope.active || 0;

      /**
       * Receive action from tab on create new tab
       */
      $scope.$on('tabs.add', function (event, titleFn, tabCallback) {

        var index = $scope.tabsBar.length;

        /**
         * Tab Object.
         * titleFn linked with read title from controller.
         * @type {{title: function, index: Number, active: item.active}}
         */
        let tabBar = {
          title: titleFn,
          index: index,
          active: function () {
            return index == $scope.active;
          }
        };
        $scope.tabsBar.push(tabBar);
        tabCallback(tabBar);
        if (typeof $scope.onAdd == 'function') {
          $scope.onAdd(tabBar);
        }
      });

      /**
       * Open new tab. Use for run onChangeTab action.
       * Recommended method for change tab.
       * Use in directive and controller.
       * @param newIndex
       */
      $scope.open = function (newIndex) {
        var oldIndex = $scope.active;
        $scope.active = newIndex;

        if (typeof $scope.onChangeTab == 'function') {
          $scope.onChangeTab($scope.tabsBar[newIndex], $scope.tabsBar[oldIndex]);
        }
      }

    }];
  }

  link(scope, element, attrs, transclude) {

    if (typeof scope.onInit == 'function') {

      /**
       * Remove tab callback for controller
       * @param index
       */
      let removeFn = function(index){
        if (typeof scope.onRemove == 'function') {
          scope.onRemove(scope.tabsBar[index]);
        }
        scope.tabsBar.splice(index, 1);
      };

      scope.onInit(scope.tabsBar, scope.open, removeFn);
    }

  }

  static createInstance($templateCache, $compile) {
    Tabs.instance = new Tabs($templateCache, $compile);
    return Tabs.instance;
  }
}
Tabs.createInstance.$inject = ['$templateCache', '$compile'];

export {Tabs}
