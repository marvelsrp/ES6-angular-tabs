/*jslint es6: true */
import {Tabs}       from './tabs.directive.js';

describe('Tabs', function () {
  var $compile,
    $scope,
    $sce,
    html =  '<tabs active="active" \
          on-init="onInit" \
          on-change-tab="onChangeTab" \
          on-add="onAdd" \
          on-remove="onRemove"> \
          <tab ng-repeat="tab in tabs"> \
            <tab-header title="tab.title"></tab-header> \
            <tab-content ng-bind-html="tab.content"></tab-content> \
          </tab> \
        </tabs>';

  beforeEach(angular.mock.module("app"));
  beforeEach(inject(function(_$compile_, _$rootScope_, _$sce_){

    $compile = _$compile_;
    $scope = _$rootScope_.$new();
    $sce = _$sce_;
    $scope.tabs = [
      {
        title: 'test title 1',
        content: $sce.trustAsHtml('test content 1')
      },{
        title: 'test title 2',
        content: $sce.trustAsHtml('test content 2')
      }
    ];
    $scope.active = 0;
    $scope.onChangeTab = function (newTab, oldTab) {
      console.info('Change tab from ', oldTab.index, ' to ', newTab.index);
    };
    $scope.onAdd = function (newTab) {
      console.info('Add new tab', newTab.index);
    };
    $scope.onRemove = function (removeTab) {
      console.info('Remove tab', removeTab.index);
    };
  }));
  it('To be defined', inject(function() {

    var element = $compile(html)($scope);
    $scope.$digest();
    expect(element.html()).toBeDefined();
  }));

  it('Have tabs bar', inject(function() {

    var element = $compile(html)($scope);
    $scope.$digest();
    expect(element.html()).toContain('<span class="text-wrapper ng-binding">test title 1</span>');
  }));
});