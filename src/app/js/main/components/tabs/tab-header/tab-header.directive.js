

class TabHeader {
    constructor($templateCache) {
        this.restrict = 'E';
        this.require = '^tab';
        this.transclude = true;
    }

    link(scope, element, attrs, TabCtrl, transclude) {
        transclude(scope, function(clone) {
            TabCtrl.setTitle(clone.text().trim());
        });
    }

    static createInstance($templateCache) {
        TabHeader.instance = new TabHeader($templateCache);
        return TabHeader.instance;
    }
}
TabHeader.createInstance.$inject = ['$templateCache'];

export {TabHeader}

