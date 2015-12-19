class MainController{
    constructor($scope){
        this.scope = $scope;
        this.scope.Text = "ES6 Angular Tabs";
        this.init();
    }
    init(){
    }
}

MainController.$inject=['$scope'];

export {MainController}
