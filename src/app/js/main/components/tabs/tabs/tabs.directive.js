

class Tabs {
    constructor($templateCache) {
        this.restrict = 'E';
        this.transclude = true;
        this.template = $templateCache.get('main/components/tabs/tabs/tabs.directive.html');
        this.scope = true;
        this.controller = ['$scope', function ($scope) {
            console.log('Tabs');
            $scope.tabs = {};
            $scope.active = 0;

            this.add = function (title, callback, openCallback, closeCallback) {
                console.log('Tabs.add', title);
                var index = Object.keys($scope.tabs).length;
                $scope.tabs[index] = {
                    title: title,
                    open: openCallback,
                    close: closeCallback
                };
                if (index == $scope.active){
                    $scope.tabs[index].open();
                }
                callback(index);
            };

            $scope.isActive = function(index){
                return index === $scope.active;
            };

            $scope.open = function(newIndex){
                var oldIndex = $scope.active;

                $scope.tabs[oldIndex].close();
                $scope.tabs[newIndex].open();
                $scope.active = newIndex;

                $scope.$broadcast('tabs:open', $scope.active);
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

