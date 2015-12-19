class Tabs {
  constructor($templateCache, $compile) {
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
        let item = {
          title: titleFn,
          index: index,
          active: function () {
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
      }

    }];
  }

  static createInstance($templateCache, $compile) {
    Tabs.instance = new Tabs($templateCache, $compile);
    return Tabs.instance;
  }
}
Tabs.createInstance.$inject = ['$templateCache', '$compile'];

export {Tabs}
