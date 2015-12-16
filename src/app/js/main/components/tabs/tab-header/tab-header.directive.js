

class TabHeader {
    constructor($templateCache) {
        this.restrict = 'E';
        this.scope = true;
        this.require = '^tab';

        this.controller = ['$scope', function ($scope) {

        }];
    }
    link(scope, iElement, iAttrs, outerController) {
        scope.addTab(123);

    }

    static createInstance($templateCache) {
        TabHeader.instance = new TabHeader($templateCache);
        return TabHeader.instance;
    }
}
TabHeader.createInstance.$inject = ['$templateCache'];

export {TabHeader}

