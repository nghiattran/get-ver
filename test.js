'use strict'

var assert = require('assert')
var getVer = require('./')

describe('test', function(){

  
  it('check success: static version', function(done) {
    getVer('semver', '5.0.0').then(function (res) {
      assert.equal(res.version, '5.0.0')
      assert.equal(res.pkg.version, res.version)
      done()
    })
  })

  it('check success: latest', function(done) {
    getVer('semver', '*').then(function (res) {
      assert.ok(res)
      assert.equal(res.pkg.version, res.version)
      done()
    })
  })

  it('check success: no version', function(done) {
    getVer('semver').then(function (res) {
      assert.ok(res)
      assert.equal(res.pkg.version, res.version)
      done()
    })
  })

  it('check success: range', function(done) {
    getVer('semver', '^4.0.5').then(function (res) {
      assert.ok(res.version < '5.0.0')
      assert.ok(res.version >= '4.0.5')
      assert.equal(res.pkg.version, res.version)
      done()
    })
  })

  it('check success: range x', function(done) {
    getVer('semver', '^1.x').then(function (res) {
      assert.ok(res.version < '2.0.0')
      assert.ok(res.version >= '1.0.0')
      assert.equal(res.pkg.version, res.version)
      done()
    })
  })

  it('check fail: nonexist package', function(done) {
    getVer('semvers', '^1.x').catch(function (err) {
      assert.ok(err)
      done()
    })
  })

  it('check fail: no package name', function(done) {
    getVer('', '^1.x').catch(function (err) {
      assert.ok(err)
      done()
    })
  })

  it('check fail: nonexist version', function(done) {
    getVer('semver', '100.0.0').catch(function (err) {
      assert.ok(err)
      done()
    })
  })
})