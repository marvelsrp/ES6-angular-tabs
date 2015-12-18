/**
 * Created by RobertSabiryanov on 19.07.15.
 */
/**
 * Created by rsabiryanov on 24.02.2015.
 */
class MainController{
    constructor($scope, $state){
        this.$state= $state;
        this.scope=$scope;
        this.scope.Text = "Hello, man!";
        this.init();
    }
    init(){
        //this.scope.tabs = [
        //    {
        //        'title' : 'Title1',
        //        'content' : 'Content1'
        //    },
        //    {
        //        'title' : 'Title2',
        //        'content' : 'Content1'
        //    },
        //    {
        //        'title' : 'Title3',
        //        'content' : 'Content1'
        //    }
        //]
    }
}

MainController.$inject=['$scope',  '$state'];

export {MainController}
