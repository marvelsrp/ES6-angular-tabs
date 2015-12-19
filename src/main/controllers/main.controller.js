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
            reset: function(){
                this.form = {
                    title: 'New Tab',
                    content: '<h1>New Content</h1>'
                };
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
            reset: function(){
                this.form = {
                    index: $scope.tabs[0].index,
                    title: null,
                    content: null
                };
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
            reset: function(){
                this.form = {
                    index: $scope.tabs[0].index
                }
            },
            remove: function(){
                $scope.$broadcast('tabs.remove', this.form.index, function(index){
                    $scope.tabs.splice(index, 1);
                    $scope.controls.add.reset();
                    $scope.controls.change.reset();
                    $scope.controls.remove.reset();
                    $scope.active = $scope.tabs[0].index;
                });
            }
        };

        $scope.onChangeTab = function(newTab, oldTab){
            console.info('Change tab from ', oldTab.title(),' to ', newTab.title());
        };
        $scope.onAdd = function(newTab){
            console.info('Add new tab', newTab.title());
        };
        $scope.onRemove = function(removeTab){
            console.info('Remove tab', removeTab.title());
        };

    }
}

MainController.$inject=['$scope','$http','$sce'];

export {MainController}
