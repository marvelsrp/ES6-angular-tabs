

class Tab {
    constructor($templateCache) {
        this.restrict = 'E';
        this.transclude = true;
        this.require = '^tabs';
        this.template = $templateCache.get('main/components/tabs/tab/tab.directive.html');
        this.scope = true;
        this.controller = ['$scope', function ($scope) {
            console.log('Tab ctrl');
            $scope.index = undefined;
            $scope.active = false;
            $scope.title = undefined;

            this.setTitle = function(title){
                $scope.title = title;
            };
            $scope.open = function(){
                $scope.active = true;
            };
            $scope.close = function(){
                $scope.active = false;
            };
        }];
    }
    link(scope, element, attrs, TabsCtrl, transclude) {

        TabsCtrl.add(scope.title, function(index){
            scope.index = index;
        }, scope.open, scope.close);

        scope.isActive = function(){
            return TabsCtrl.isActive(scope.index);
        }
    }
    static createInstance($templateCache) {
        Tab.instance = new Tab($templateCache);
        return Tab.instance;
    }
}
Tab.createInstance.$inject = ['$templateCache'];

export {Tab}

