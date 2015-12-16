

class Tabs {
    constructor($templateCache) {
        this.restrict = 'E';
        this.transclude = true;
        this.controllerAs = 'tabsComponent';
        this.bindToController = true;
        this.template = $templateCache.get('main/components/tabs/tabs/tabs.directive.html');
        this.scope = {};
        this.controller = ['$scope', function ($scope) {
            $scope.copyright = function () {
                return 'Page © - 2015';
            };
            $scope.tabs = [];
            $scope.addTab = function(t){
                console.log('addTab', t);
                $scope.tabs.push(t);
            }
        }];
    }

    static createInstance($templateCache) {
        Tabs.instance = new Tabs($templateCache);
        return Tabs.instance;
    }
}
Tabs.createInstance.$inject = ['$templateCache'];

export {Tabs}

