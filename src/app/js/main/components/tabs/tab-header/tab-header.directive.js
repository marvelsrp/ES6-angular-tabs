

class TabHeader {
    constructor($templateCache) {
        this.restrict = 'E';
        this.require = '^tab';
        this.transclude = true;
        this.template = $templateCache.get('main/components/tabs/tab-header/tab-header.directive.html');
        this.controller = ['$scope', function ($scope) {
            console.log('controller');
            //this.setTitle = function(title){
            //    $scope.title = title;
            //};
            //this.isActive = function(){
            //
            //}
            $scope.$emit('tab:header', '123');
        }];
    }

    compile (tElem, tAttrs, linker){
        return function($scope, $element, $attr){
            linker($scope, function(clone){
                console.log('linker');
                var title = clone.text().trim();

            });
        };
    }
    //
    //link(scope, element, attrs, TabCtrl, transclude) {
    //    transclude(scope, function(clone) {
    //        scope.title = clone.text().trim();
    //        scope.$emit('tab:header', clone.text().trim());
    //    });
    //}

    static createInstance($templateCache) {
        TabHeader.instance = new TabHeader($templateCache);
        return TabHeader.instance;
    }
}
TabHeader.createInstance.$inject = ['$templateCache'];

export {TabHeader}

