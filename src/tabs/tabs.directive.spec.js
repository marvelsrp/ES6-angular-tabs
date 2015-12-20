/*jslint es6: true */
import {Tabs}       from './tabs.directive.js';

describe('Tabs', function() {
  let ctrl;

  beforeEach(() => {
    ctrl = new Tabs();
  });

  it('should be defined', function () {
    expect(ctrl).toBeDefined();
  });
});