

class Tabs {
    constructor($templateCache) {
        this.restrict = 'E';
        this.transclude = true;
        this.template = $templateCache.get('main/components/tabs/tabs/tabs.directive.html');
        this.scope = {};
        this.controller = ['$scope', function ($scope) {

            $scope.tabs = [];
            $scope.active = 0;


            $scope.$on('tabs:add', function (event, title) {
                event.stopPropagation();
                console.log('Tabs $on add', title);
                $scope.tabs.push(title);
            });

            //this.add = function(t){
            //    console.log('addTab', t);
            //    $scope.tabs.push(t);
            //};

            $scope.open = function(index){
                console.log('open', index);
                if (! $scope.isActive(index)){
                    $scope.active = index;
                }

                $scope.$broadcast('open', {
                    active: $scope.active
                });
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

