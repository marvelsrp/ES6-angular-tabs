

class Tab {
    constructor($templateCache) {
        this.restrict = 'E';
        this.transclude = true;
        this.require = '^tabs';
        this.template = $templateCache.get('main/components/tabs/tab/tab.directive.html');
        this.scope = true;
        this.controller = ['$scope', function ($scope) {
            this.setTitle = function(title){
                $scope.title = title;
            };
        }];
    }
    link(scope, element, attrs, TabsCtrl, transclude) {

        TabsCtrl.add(scope.title, function(tab){
            scope.tab = tab;
        });
    }
    static createInstance($templateCache) {
        Tab.instance = new Tab($templateCache);
        return Tab.instance;
    }
}
Tab.createInstance.$inject = ['$templateCache'];

export {Tab}

