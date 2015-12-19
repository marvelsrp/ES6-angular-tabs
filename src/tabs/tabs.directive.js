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
      console.log('tabs init', $scope.active);
      $scope.tabsBar = [];
      $scope.active = $scope.active || 0;

      $scope.$on('tabs.add', function (event, titleFn, callback) {

        var index = $scope.tabsBar.length;
        let item = {
          title: titleFn,
          active: function() {
            return index == $scope.active;
          }
        };
        $scope.tabsBar.push(item);
        callback(item);
      });

      $scope.open = function (newIndex) {
        $scope.active = newIndex;
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
