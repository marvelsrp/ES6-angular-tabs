class TabContent {
  constructor($templateCache, $sce) {
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

  static createInstance($templateCache, $sce) {
    TabContent.instance = new TabContent($templateCache, $sce);
    return TabContent.instance;
  }
}
TabContent.createInstance.$inject = ['$templateCache', '$sce'];

export {TabContent}

