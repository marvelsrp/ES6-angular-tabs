/**
 * Created by RobertSabiryanov on 19.07.15.
 */
import router from './router.js';
import {MainController} from './controllers/main.controller.js';


import {Tabs} from './components/tabs/tabs/tabs.directive.js';
import {Tab} from './components/tabs/tab/tab.directive.js';
import {TabHeader} from './components/tabs/tab-header/tab-header.directive.js';
import {TabContent} from './components/tabs/tab-content/tab-content.directive.js';

angular.module( 'main' ).directive('tabs', Tabs.createInstance);
angular.module( 'main' ).directive('tab', Tab.createInstance);
angular.module( 'main' ).directive('tabHeader', TabHeader.createInstance);
angular.module( 'main' ).directive('tabContent', TabContent.createInstance);
angular.module( 'main' ).controller('MainController', MainController);
