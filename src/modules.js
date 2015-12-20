angular.module('app', ['main', 'tabsView']);

angular.module('app.templates', []);
angular.module('main', ['app.templates']);
angular.module('tabsView', ['app.templates']);