class TabHeader {
  constructor() {
    this.restrict = 'E';
    this.require = '^tab';
    this.transclude = true;
  }

  link(scope, element, attrs, TabCtrl, transclude) {
    transclude(scope, function (clone) {
      var title = clone.text().trim();
      TabCtrl.setTitle(title);
    });
  }

  static createInstance($templateCache) {
    TabHeader.instance = new TabHeader($templateCache);
    return TabHeader.instance;
  }
}

export {TabHeader}

