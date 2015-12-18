

class TabContent {
    constructor($templateCache) {
        this.restrict = 'E';
        //this.require = '^tab';
        this.transclude = true;
        this.template = $templateCache.get('main/components/tabs/tab-content/tab-content.directive.html');
        this.scope = true;
        this.controller = ['$scope', function ($scope) {
        }];
    }
    link(scope, element, attrs, TabCtrl, transclude) {
       // scope.isActive = TabCtrl.isActive;
    }

    static createInstance($templateCache) {
        TabContent.instance = new TabContent($templateCache);
        return TabContent.instance;
    }
}
TabContent.createInstance.$inject = ['$templateCache'];

export {TabContent}

