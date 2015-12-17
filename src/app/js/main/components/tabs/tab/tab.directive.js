

class Tab {
    constructor($templateCache) {
        this.restrict = 'E';
        this.transclude = true;
        this.require = '^tabs';
        this.template = $templateCache.get('main/components/tabs/tab/tab.directive.html');
        this.controller = ['$scope', function ($scope) {
            this.setTitle = function(title){
                $scope.title = title;
            };
            this.isActive = function(){

            }
        }];
    }

    link(scope, element, attrs, TabsCtrl) {
        TabsCtrl.add(scope.title);
        scope.isActive = TabsCtrl.isActive;
    }

    static createInstance($templateCache) {
        Tab.instance = new Tab($templateCache);
        return Tab.instance;
    }
}
Tab.createInstance.$inject = ['$templateCache'];

export {Tab}

