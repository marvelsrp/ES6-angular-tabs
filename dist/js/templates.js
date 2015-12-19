angular.module("app.templates").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\n<html >\n<head >\n    <meta charset=\"UTF-8\">\n    <title>Es6 Angular Tabs</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <!-- bower:css -->\n    <!-- bower installed css files will go here... -->\n    <!-- endinject -->\n    <!-- customCss:css -->\n    <!-- built css files will go here... -->\n    <!-- endinject -->\n</head>\n<body ng-app=\"app\">\n<div ng-include=\"\'main/controllers/main.controller.html\'\"></div>\n\n<!-- bower:js -->\n<!-- endinject -->\n\n<!-- bundle:js -->\n<!-- endinject -->\n\n<!-- templates:js -->\n<!-- endinject -->\n\n</body>\n</html>");
$templateCache.put("tabs/tabs.directive.html","<div class=\"tabs\">\n    <ul class=\"bar\">\n        <li ng-repeat=\"tab in tabsBar track by $index\"\n            ng-click=\"open(tab.index)\"\n            ng-class=\"{ \'active\': tab.active()}\">\n            {{tab.title()}}\n        </li>\n    </ul>\n    <ng-transclude></ng-transclude>\n</div>");
$templateCache.put("main/controllers/main.controller.html","<div class=\"container\" ng-controller=\"MainController\">\n    <div class=\"row text-center\">\n        <h1>{{title}}</h1>\n    </div>\n    <div class=\"controls\">\n        <div class=\"col50\">\n            <div class=\"form-group\">\n                <label>Active Tab:</label> {{active}} {{tabs[active].title}}\n            </div>\n            <div class=\"form-group\">\n                <label>Change Active Tab:</label>\n                <select ng-model=\"active\"\n                        ng-options=\"tab.index as tab.title for tab in tabs\"></select>\n            </div>\n            <div class=\"form-group\">\n                <label>Change Title and Content:</label>\n                <select ng-model=\"controls.change.form.index\"\n                        ng-options=\"tab.index as tab.title for tab in tabs\"></select>\n                <button ng-click=\"controls.change.get()\">Get</button>\n                    <input type=\"text\" class=\"form-control\"\n                           placeholder=\"Title\"\n                           ng-model=\"controls.change.form.title\" >\n                    <textarea ng-model=\"controls.change.form.content\"\n                              placeholder=\"Content\"\n                              type=\"text\" class=\"form-control\"></textarea>\n                <button ng-click=\"controls.change.save()\">Save</button>\n            </div>\n        </div>\n        <div class=\"col50\">\n            <div class=\"form-group\">\n                <label>Add Tab:</label>\n                <input ng-model=\"controls.add.form.title\"\n                       placeholder=\"Title\"\n                       type=\"text\" class=\"form-control\" >\n                <textarea ng-model=\"controls.add.form.content\"\n                          placeholder=\"Content\"\n                          type=\"text\" class=\"form-control\"></textarea>\n                <button ng-click=\"controls.add.add()\">Add Tab</button>\n            </div>\n            <div class=\"form-group\">\n                <label>Remove Tab:</label>\n                <select ng-model=\"controls.remove.form.index\"\n                        ng-options=\"tab.index as tab.title for tab in tabs\"></select>\n                <button ng-click=\"controls.remove.remove()\">Remove</button>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <tabs active=\"active\" on-change-tab=\"onChangeTab\" on-add=\"onAdd\" on-remove=\"onRemove\">\n            <tab ng-repeat=\"tab in tabs\">\n                <tab-header title=\"tab.title\"></tab-header>\n                <tab-content ng-bind-html=\"tab.content\"></tab-content>\n            </tab>\n        </tabs>\n    </div>\n</div>");
$templateCache.put("tabs/tab/tab.directive.html","<div ng-show=\"tab.active()\">\n    <ng-transclude></ng-transclude>\n</div>");
$templateCache.put("tabs/tab/content/tab-content.directive.html","<div class=\"content\">\n    <ng-transclude></ng-transclude>\n</div>");}]);