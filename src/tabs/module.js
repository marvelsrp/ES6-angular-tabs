import {Tabs}       from './tabs.directive.js';
import {Tab}        from './tab/tab.directive.js';
import {TabHeader}  from './tab/header/tab-header.directive.js';
import {TabContent} from './tab/content/tab-content.directive.js';

angular.module('fTabs')
  .directive('tabs', Tabs.createInstance)
  .directive('tab', Tab.createInstance)
  .directive('tabHeader', TabHeader.createInstance)
  .directive('tabContent', TabContent.createInstance);
