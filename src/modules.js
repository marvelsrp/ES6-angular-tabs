angular.module('app', ['main', 'fTabs']);

angular.module('app.templates', []);
angular.module('main', ['app.templates']);
angular.module('tabsView', ['app.templates']);