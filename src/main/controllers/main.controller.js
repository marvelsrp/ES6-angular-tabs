class MainController{
    constructor($scope, $http, $sce){
        $scope.title = "ES6 Angular Tabs";
        $scope.active = 1;
        $scope.tabs = [];
        $http({
            method: 'GET',
            url: '/mock/main/controllers/main.controller.mock.json'
        }).then(function successCallback(response) {
            for(var i = 0; i < response.data.length;i++){
                $scope.tabs[i] = {
                    title: response.data[i].title,
                    content: $sce.trustAsHtml(response.data[i].content)
                }
            }
        });

        $scope.onInitTabs = function(tabs){
            //$scope.tabs = tabs;
            console.log(tabs);
        }
    }
}

MainController.$inject=['$scope','$http','$sce'];

export {MainController}
