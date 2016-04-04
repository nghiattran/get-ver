'use strict'

var semver = require('semver')
var packageJson = require('get-package-json')

module.exports = function (pkgName, needVersion){
  needVersion = needVersion || '*'

  return new Promise(function (fulfill, reject) {
    packageJson(pkgName)
      .then(function (res) {
        var version = semver.maxSatisfying(Object.keys(res.pkg.versions), needVersion)

        if (!version) {
          reject({
            pkgName: pkgName,
            msg : 'No version match with ' + needVersion
          })
        }

        fulfill({
          pkg: res.pkg.versions[version],
          version: version
        })
      })
      .catch(function (err) {
        reject(err)
      })
  })
}