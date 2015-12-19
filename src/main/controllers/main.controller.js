class MainController{
    constructor($scope, $http, $sce){
        $scope.title = "ES6 Angular Tabs";
        $scope.active = 0;
        $scope.tabs = [];

        $http({
            method: 'GET',
            url: '/mock/main/controllers/main.controller.mock.json'
        }).then(function successCallback(response) {
            for(let i = 0; i < response.data.length;i++){
                    $scope.tabs[i] = {
                    index: i,
                    title: response.data[i].title,
                    content: $sce.trustAsHtml(response.data[i].content)
                }
            }
        });

        $scope.controls = {};
        $scope.controls.add ={
            form: {
                title: 'New Tab',
                content: '<h1>New Content</h1>'
            },
            add: function () {
                let index = $scope.tabs.length;
                $scope.tabs[index] = {
                    index: index,
                    title: this.form.title,
                    content: $sce.trustAsHtml(this.form.content)
                }
            }
        };
        $scope.controls.change = {
            form: {
                index: 0,
                title: null,
                content: null
            },
            get: function(){
                this.form.title   = $scope.tabs[this.form.index].title;
                this.form.content = $scope.tabs[this.form.index].content.$$unwrapTrustedValue();
            },
            save: function(){
                $scope.tabs[this.form.index].title = this.form.title;
                $scope.tabs[this.form.index].content = $sce.trustAsHtml(this.form.content);
            }
        };
        $scope.controls.remove = {
            form: {
                index: 0
            },
            remove: function(){
               delete $scope.tabs[this.form.index];
            }
        };

    }
}

MainController.$inject=['$scope','$http','$sce'];

export {MainController}
