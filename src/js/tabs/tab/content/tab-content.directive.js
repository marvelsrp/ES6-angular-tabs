class TabContent {
  constructor($templateCache) {
    this.restrict = 'E';
    this.require = '^tab';
    this.transclude = true;
    this.template = $templateCache.get('tabs/tab/content/tab-content.directive.html');
  }

  static createInstance($templateCache) {
    TabContent.instance = new TabContent($templateCache);
    return TabContent.instance;
  }
}
TabContent.createInstance.$inject = ['$templateCache'];

export {TabContent}

