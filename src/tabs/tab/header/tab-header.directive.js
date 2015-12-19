class TabHeader {
  constructor() {
    this.restrict = 'E';
    this.require = '^tab';
    this.transclude = true;
    this.scope = {
      title: '='
    };
    this.controller = ['$scope', function ($scope) {
      $scope.$emit('tab.add', function(){
        return $scope.title;
      });
    }];
  }
  static createInstance() {
    TabHeader.instance = new TabHeader();
    return TabHeader.instance;
  }
}

export {TabHeader}

