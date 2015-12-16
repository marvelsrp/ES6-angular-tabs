

class Tab {
    constructor($templateCache) {
        this.restrict = 'E';
        this.transclude = true;
        this.require = '^tabs';
        this.template = $templateCache.get('main/components/tabs/tab/tab.directive.html');
        this.scope = {};
        this.controller = ['$scope', function ($scope) {
            $scope.copyright = function () {
                return 'Page © - 2015';
            };
        }];
    }

    link(scope) {}

    static createInstance($templateCache) {
        Tab.instance = new Tab($templateCache);
        return Tab.instance;
    }
}
Tab.createInstance.$inject = ['$templateCache'];

export {Tab}

