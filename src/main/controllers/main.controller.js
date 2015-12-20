class MainController {
  constructor($scope, $http, $sce, $log) {
    $scope.title = 'ES6 Angular Tabs';

    /**
     * Active tab.
     * Recommend use openCallback from onInit for use event onChange.
     * @type {number}
     */
    $scope.active = 0;

    /**
     * Tabs data
     * @type {Array}
     */
    $scope.tabs = [];

    /**
     * Get data for tabs from mock file
     */
    $http({
      method: 'GET',
      url: '/mock/main/controllers/main.controller.mock.json'
    }).then(function successCallback(response) {
      for (let i = 0; i < response.data.length; i++) {
        $scope.tabs[i] = {
          index: i,
          title: response.data[i].title,
          content: $sce.trustAsHtml(response.data[i].content)
        }
      }
    });

    /**
     * Tabs callbacks
     * @param tabsBar Array of tabs
     * @param openFn Callback for open tab
     * @param removeFn Callback for remove tab
     */
    $scope.onInit = function (tabsBar, openFn, removeFn) {
      $scope.directiveCallback = removeFn;
      $scope.controls.open.directiveCallback = openFn;
      $scope.controls.remove.directiveCallback = removeFn;
      $log.info('Init', tabsBar);
    };
    $scope.onChangeTab = function (newTab, oldTab) {
      $log.info('Change tab from ', oldTab.title(), ' to ', newTab.title());
    };
    $scope.onAdd = function (newTab) {
      $log.info('Add new tab', newTab.title());
    };
    $scope.onRemove = function (removeTab) {
      $log.info('Remove tab', removeTab.title());
    };

    /**
     * Object management directive
     * @type {{}}
     */
    $scope.controls = {};

    /**
     * Return first index
     * @returns {Number}
     */
    $scope.controls.getAllowActive = function () {
      return $scope.tabs[0].index;
    };

    /**
     * Action for reset controls data after remove tab
     */
    $scope.controls.resetAll = function () {
      this.add.reset();
      this.change.reset();
      this.remove.reset();
      $scope.active = this.getAllowActive();
    };

    /**
     * Control module for open tab
     * @type {{directiveCallback: undefined | function, form: {index: number}, reset: $scope.controls.open.reset, open: $scope.controls.open.open}}
     */
    $scope.controls.open = {
      directiveCallback: undefined,
      form: {
        index: 0
      },
      reset: function () {
        this.form = {
          index: $scope.controls.getAllowActive()
        };
      },
      open: function () {
        if (typeof this.directiveCallback == 'function') {
          this.directiveCallback(this.form.index);
        } else {
          $log.error('Undefined open tab callback');
        }
      }
    };

    /**
     * Control module for add new tab
     * @type {{form: {title: string, content: string}, reset: $scope.controls.add.reset, add: $scope.controls.add.add}}
     */
    $scope.controls.add = {
      form: {
        title: 'New Tab',
        content: '<h1>New Content</h1>'
      },
      reset: function () {
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

    /**
     * Control module for change content and title in tab
     * @type {{form: {index: number, title: null, content: null}, reset: $scope.controls.change.reset, get: $scope.controls.change.get, save: $scope.controls.change.save}}
     */
    $scope.controls.change = {
      form: {
        index: 0,
        title: null,
        content: null
      },
      reset: function () {
        this.form = {
          index: $scope.controls.getAllowActive(),
          title: null,
          content: null
        };
      },
      get: function () {
        this.form.title = $scope.tabs[this.form.index].title;
        this.form.content = $scope.tabs[this.form.index].content.$$unwrapTrustedValue();
      },
      save: function () {
        $scope.tabs[this.form.index].title = this.form.title;
        $scope.tabs[this.form.index].content = $sce.trustAsHtml(this.form.content);
      }
    };

    /**
     * Control module for remove tab
     * @type {{directiveCallback: undefined | function, form: {index: number}, reset: $scope.controls.remove.reset, remove: $scope.controls.remove.remove}}
     */
    $scope.controls.remove = {
      directiveCallback: undefined,
      form: {
        index: 0
      },
      reset: function () {
        this.form = {
          index: $scope.controls.getAllowActive()
        }
      },
      remove: function () {
        if (typeof this.directiveCallback == 'function') {
          this.directiveCallback(this.form.index);
          $scope.tabs.splice(index, 1);
          $scope.controls.resetAll();
        } else {
          $log.error('Undefined remove tab callback');
        }
      }
    };


  }
}

MainController.$inject = ['$scope', '$http', '$sce', '$log'];

export {MainController}
