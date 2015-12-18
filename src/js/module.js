import {Tabs}       from './tabs/tabs.directive.js';
import {Tab}        from './tabs/tab/tab.directive.js';
import {TabHeader}  from './tabs/tab/header/tab-header.directive.js';
import {TabContent} from './tabs/tab/content/tab-content.directive.js';

angular.module('fTab').directive('tabs', Tabs.createInstance);
angular.module('fTab').directive('tab', Tab.createInstance);
angular.module('fTab').directive('tabHeader', TabHeader.createInstance);
angular.module('fTab').directive('tabContent', TabContent.createInstance);
