!function t(e, n, a) {
    function i(c, s) {
        if (!n[c]) {
            if (!e[c]) {
                var o = "function" == typeof require && require;
                if (!s && o) return o(c, !0);
                if (r) return r(c, !0);
                var u = new Error("Cannot find module '" + c + "'");
                throw u.code = "MODULE_NOT_FOUND", u;
            }
            var l = n[c] = {
                exports: {}
            };
            e[c][0].call(l.exports, function(t) {
                var n = e[c][1][t];
                return i(n ? n : t);
            }, l, l.exports, t, e, n, a);
        }
        return n[c].exports;
    }
    for (var r = "function" == typeof require && require, c = 0; c < a.length; c++) i(a[c]);
    return i;
}({
    1: [ function(t, e, n) {
        "use strict";
        var a = t("./tabs/tabs.directive.js"), i = t("./tabs/tab/tab.directive.js"), r = t("./tabs/tab/header/tab-header.directive.js"), c = t("./tabs/tab/content/tab-content.directive.js");
        angular.module("fTab").directive("tabs", a.Tabs.createInstance), angular.module("fTab").directive("tab", i.Tab.createInstance), 
        angular.module("fTab").directive("tabHeader", r.TabHeader.createInstance), angular.module("fTab").directive("tabContent", c.TabContent.createInstance);
    }, {
        "./tabs/tab/content/tab-content.directive.js": 2,
        "./tabs/tab/header/tab-header.directive.js": 3,
        "./tabs/tab/tab.directive.js": 4,
        "./tabs/tabs.directive.js": 5
    } ],
    2: [ function(t, e, n) {
        "use strict";
        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                    Object.defineProperty(t, a.key, a);
                }
            }
            return function(e, n, a) {
                return n && t(e.prototype, n), a && t(e, a), e;
            };
        }(), r = function() {
            function t(e) {
                a(this, t), this.restrict = "E", this.require = "^tab", this.transclude = !0, this.template = e.get("tabs/tab/content/tab-content.directive.html");
            }
            return i(t, null, [ {
                key: "createInstance",
                value: function(e) {
                    return t.instance = new t(e), t.instance;
                }
            } ]), t;
        }();
        r.createInstance.$inject = [ "$templateCache" ], n.TabContent = r;
    }, {} ],
    3: [ function(t, e, n) {
        "use strict";
        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                    Object.defineProperty(t, a.key, a);
                }
            }
            return function(e, n, a) {
                return n && t(e.prototype, n), a && t(e, a), e;
            };
        }(), r = function() {
            function t() {
                a(this, t), this.restrict = "E", this.require = "^tab", this.transclude = !0;
            }
            return i(t, [ {
                key: "link",
                value: function(t, e, n, a, i) {
                    i(t, function(t) {
                        var e = t.text().trim();
                        a.setTitle(e);
                    });
                }
            } ], [ {
                key: "createInstance",
                value: function(e) {
                    return t.instance = new t(e), t.instance;
                }
            } ]), t;
        }();
        n.TabHeader = r;
    }, {} ],
    4: [ function(t, e, n) {
        "use strict";
        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                    Object.defineProperty(t, a.key, a);
                }
            }
            return function(e, n, a) {
                return n && t(e.prototype, n), a && t(e, a), e;
            };
        }(), r = function() {
            function t(e) {
                a(this, t), this.restrict = "E", this.transclude = !0, this.require = "^tabs", this.template = e.get("tabs/tab/tab.directive.html"), 
                this.scope = !0, this.controller = [ "$scope", function(t) {
                    this.setTitle = function(e) {
                        t.title = e;
                    };
                } ];
            }
            return i(t, [ {
                key: "link",
                value: function(t, e, n, a, i) {
                    a.add(t.title, function(e) {
                        t.tab = e;
                    });
                }
            } ], [ {
                key: "createInstance",
                value: function(e) {
                    return t.instance = new t(e), t.instance;
                }
            } ]), t;
        }();
        r.createInstance.$inject = [ "$templateCache" ], n.Tab = r;
    }, {} ],
    5: [ function(t, e, n) {
        "use strict";
        function a(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var a = e[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                    Object.defineProperty(t, a.key, a);
                }
            }
            return function(e, n, a) {
                return n && t(e.prototype, n), a && t(e, a), e;
            };
        }(), r = function() {
            function t(e) {
                a(this, t), this.restrict = "E", this.transclude = !0, this.template = e.get("tabs/tabs.directive.html"), 
                this.scope = !0, this.controller = [ "$scope", function(t) {
                    t.tabs = [], t.active = 0, this.add = function(e, n) {
                        var a = t.tabs.length, i = {
                            title: e,
                            active: a == t.active
                        };
                        t.tabs.push(i), n(i);
                    }, t.open = function(e) {
                        var n = t.active;
                        t.tabs[n].active = !1, t.tabs[e].active = !0, t.active = e;
                    };
                } ];
            }
            return i(t, null, [ {
                key: "createInstance",
                value: function(e) {
                    return t.instance = new t(e), t.instance;
                }
            } ]), t;
        }();
        r.createInstance.$inject = [ "$templateCache" ], n.Tabs = r;
    }, {} ]
}, {}, [ 1 ]), angular.module("main.templates").run([ "$templateCache", function(t) {
    t.put("tabs/tabs.directive.html", '<div>\n    <style>\n        .tabs-header{\n            height: 50px;\n            display: inline-block;\n        }\n        .tabs-title{\n            width: auto;\n            border: 1px solid silver;\n            float:left;\n            height: 50px;\n            min-width: 100px;\n            text-align: center;\n            vertical-align: middle;\n            display: inline-block;\n            line-height: 50px;\n            cursor: pointer;\n        }\n        .tabs-title.active{\n            cursor: default;\n            background: #0086b3;\n        }\n        .tab-header{\n            display: none;\n        }\n    </style>\n    <div class="tabs-header">\n        <div ng-repeat="tab in tabs track by $index"  class="tabs-title"\n             ng-click="open($index)"\n             ng-class="{ \'active\': tab.active}">{{tab.title}}</div>\n    </div>\n    <ng-transclude></ng-transclude>\n</div>'), 
    t.put("tabs/tab/tab.directive.html", '<div style="border: 1px solid red;" ng-show="tab.active">\n    <ng-transclude></ng-transclude>\n</div>'), 
    t.put("tabs/tab/content/tab-content.directive.html", '<div style="border: 1px solid silver;">\n    <ng-transclude></ng-transclude>\n</div>');
} ]);