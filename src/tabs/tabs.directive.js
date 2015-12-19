class Tabs {
  constructor($templateCache, $compile) {
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
          index: index,
        };
        $scope.tabs.push(item);
        callback(item);
      };

      $scope.open = function (newIndex) {
        var oldIndex = $scope.active;
        $scope.tabs[oldIndex].active = false;
        $scope.tabs[newIndex].active = true;
        $scope.active = newIndex;
      }

    }];
  }

  link(scope, element, attrs, TabsCtrl, transclude) {

    scope.onInit({
      tabs: scope.tabs,
      active: scope.active,
      count: scope.tabs.length - 1,
      open: scope.open,
      close: scope.add
    });
  }

  static createInstance($templateCache, $compile) {
    Tabs.instance = new Tabs($templateCache, $compile);
    return Tabs.instance;
  }
}
Tabs.createInstance.$inject = ['$templateCache', '$compile'];

export {Tabs}
