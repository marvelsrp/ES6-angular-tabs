

class TabContent {
    constructor($templateCache) {
        this.restrict = 'E';
        this.scope = true;
        this.require = '^tab';
    }


    static createInstance($templateCache) {
        TabContent.instance = new TabContent($templateCache);
        return TabContent.instance;
    }
}
TabContent.createInstance.$inject = ['$templateCache'];

export {TabContent}

