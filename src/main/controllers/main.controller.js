class MainController{
    constructor($scope){
        this.scope = $scope;
        this.scope.Text = "Hello, man!";
        this.init();
    }
    init(){
    }
}

MainController.$inject=['$scope'];

export {MainController}
