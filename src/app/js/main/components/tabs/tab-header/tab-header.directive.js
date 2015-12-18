

class TabHeader {
    constructor($templateCache) {
        this.restrict = 'E';
        this.require = '^tab';
        this.transclude = true;
        this.scope = true;
        this.controller = ['$scope', function ($scope) {
            console.log('TabHeader Ctrl');

        }];
    }

    link(scope, element, attrs, TabCtrl, transclude) {
        transclude(scope, function(clone) {
            var title = clone.text().trim();
            TabCtrl.setTitle(title);
        });
    }

    static createInstance($templateCache) {
        TabHeader.instance = new TabHeader($templateCache);
        return TabHeader.instance;
    }
}
TabHeader.createInstance.$inject = ['$templateCache'];

export {TabHeader}

