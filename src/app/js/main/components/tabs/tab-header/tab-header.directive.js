

class TabHeader {
    constructor($templateCache) {
        this.restrict = 'E';
        this.require = '^tab';
        this.transclude = true;
        this.template = $templateCache.get('main/components/tabs/tab-header/tab-header.directive.html');
        this.controller = ['$scope', function ($scope) {

                //scope.$parent.addTab(123);




        }];
    }

    static createInstance($templateCache) {
        TabHeader.instance = new TabHeader($templateCache);
        return TabHeader.instance;
    }
}
TabHeader.createInstance.$inject = ['$templateCache'];

export {TabHeader}

