

class TabContent {
    constructor($templateCache) {
        this.restrict = 'E';
        this.require = '^tab';
        this.transclude = true;
        this.template = $templateCache.get('main/components/tabs/tab-content/tab-content.directive.html');
    }
    //link(scope, element, attrs, TabCtrl) {
    //    scope.isActive = TabCtrl.isActive;
    //    console.log('scope.isActive',TabCtrl.isActive());
    //}

    static createInstance($templateCache) {
        TabContent.instance = new TabContent($templateCache);
        return TabContent.instance;
    }
}
TabContent.createInstance.$inject = ['$templateCache'];

export {TabContent}

