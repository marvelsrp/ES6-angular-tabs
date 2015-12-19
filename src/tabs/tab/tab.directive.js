class Tab {
  constructor($templateCache) {
    this.restrict = 'E';
    this.transclude = true;
    this.require = '^tabs';
    this.template = $templateCache.get('tabs/tab/tab.directive.html');
    this.scope = true;
    this.replace = true;

    this.controller = ['$scope', function ($scope) {

      $scope.$on('tab.add', function (event, titleFn) {
        $scope.$emit('tabs.add', titleFn, function(tab){
          $scope.tab = tab;
        });
      });

    }];
  }

  static createInstance($templateCache) {
    Tab.instance = new Tab($templateCache);
    return Tab.instance;
  }
}
Tab.createInstance.$inject = ['$templateCache'];

export {Tab}

