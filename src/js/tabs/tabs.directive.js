class Tabs {
  constructor($templateCache) {
    this.restrict = 'E';
    this.transclude = true;
    this.template = $templateCache.get('tabs/tabs.directive.html');
    this.scope = true;
    this.controller = ['$scope', function ($scope) {
      $scope.tabs = [];
      $scope.active = 0;


      this.add = function (title, callback) {
        var index = $scope.tabs.length;
        var item = {
          title: title,
          active: index == $scope.active
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

  static createInstance($templateCache) {
    Tabs.instance = new Tabs($templateCache);
    return Tabs.instance;
  }
}
Tabs.createInstance.$inject = ['$templateCache'];

export {Tabs}

