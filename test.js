'use strict';

var assert = require('assert');
var nodeVer = require('./');

describe('test', function(){

  
  it('check success: static version', function(done) {
    nodeVer('semver', '5.0.0').then(function (res) {
      assert.equal(res, '5.0.0');
      done();
    })
  });

  it('check success: latest', function(done) {
    nodeVer('semver', '*').then(function (res) {
      assert.ok(res);
      done();
    })
  });

  it('check success: no version', function(done) {
    nodeVer('semver').then(function (res) {
      assert.ok(res);
      done();
    })
  });

  it('check success: range', function(done) {
    nodeVer('semver', '^4.0.5').then(function (res) {
      assert.ok(res < '5.0.0');
      assert.ok(res >= '4.0.5');
      done();
    })
  });

  it('check success: range x', function(done) {
    nodeVer('semver', '^1.x').then(function (res) {
      assert.ok(res < '2.0.0');
      assert.ok(res >= '1.0.0');
      done();
    })
  });

  it('check fail: nonexist package', function(done) {
    nodeVer('semvers', '^1.x').catch(function (err) {
      assert.ok(err);
      done();
    })
  });

  it('check fail: nonexist version', function(done) {
    nodeVer('semver', '100.0.0').catch(function (err) {
      assert.ok(err);
      done();
    })
  });
});