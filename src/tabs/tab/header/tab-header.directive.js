class TabHeader {
  constructor() {
    this.restrict = 'E';
    this.require = '^tab';
    this.transclude = true;
    this.scope = {
      title: '='
    };
    this.link = function(scope, element, attrs, TabCtrl, transclude) {
      TabCtrl.setTitle(scope.title);
    }
  }
  static createInstance($compile) {
    TabHeader.instance = new TabHeader();
    return TabHeader.instance;
  }
}

export {TabHeader}

