angular.module("app.templates").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\n<html >\n<head >\n    <meta charset=\"UTF-8\">\n    <title>Es6 Angular Tabs</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <!-- bower:css -->\n    <!-- bower installed css files will go here... -->\n    <!-- endinject -->\n    <!-- customCss:css -->\n    <!-- built css files will go here... -->\n    <!-- endinject -->\n</head>\n<body ng-app=\"app\">\n<div ng-include=\"\'main/controllers/main.controller.html\'\"></div>\n\n<!-- bower:js -->\n<!-- endinject -->\n\n<!-- bundle:js -->\n<!-- endinject -->\n\n<!-- templates:js -->\n<!-- endinject -->\n\n</body>\n</html>");
$templateCache.put("tabs/tabs.directive.html","<div>\n    <div class=\"tabs-header\">\n        <div ng-repeat=\"tab in tabs track by $index\" class=\"tabs-title\"\n             ng-click=\"open($index)\"\n             ng-class=\"{ \'active\': tab.active}\">{{tab.title}}\n        </div>\n    </div>\n    <ng-transclude></ng-transclude>\n</div>");
$templateCache.put("main/controllers/main.controller.html","<div class=\"container\" ng-controller=\"MainController\">\n    <div class=\"row text-center\">\n        <h1>{{Text}}</h1>\n    </div>\n\n    <div class=\"row row-centered\">\n        <tabs>\n            <tab>\n                <tab-header>Tab1</tab-header>\n                <tab-content>Tab1 Content</tab-content>\n            </tab>\n            <tab>\n                <tab-header>Tab2</tab-header>\n                <tab-content>Tab2 Content</tab-content>\n            </tab>\n            <tab>\n                <tab-header>Tab3</tab-header>\n                <tab-content>Tab3 Content</tab-content>\n            </tab>\n            <tab>\n                <tab-header>Tab4</tab-header>\n                <tab-content>Tab4 Content</tab-content>\n            </tab>\n        </tabs>\n    </div>\n</div>");
$templateCache.put("tabs/tab/tab.directive.html","<div style=\"border: 1px solid red;\" ng-show=\"tab.active\">\n    <ng-transclude></ng-transclude>\n</div>");
$templateCache.put("tabs/tab/content/tab-content.directive.html","<div style=\"border: 1px solid silver;\">\n    <ng-transclude></ng-transclude>\n</div>");}]);