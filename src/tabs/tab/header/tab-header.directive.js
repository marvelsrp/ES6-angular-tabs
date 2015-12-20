/*jslint es6: true */
class TabHeader {
  constructor() {
    this.restrict = 'E';
    this.require = '^tab';
    this.transclude = true;
    this.scope = {
      title: '='
    };
    this.controller = ['$scope', function ($scope) {

      /**
       * Init add tab title to bar
       */
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

