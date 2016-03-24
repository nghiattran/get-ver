'use strict'

var semver = require('semver')
var http = require('http')

module.exports = function (pkgName, version){
  pkgName = pkgName || ''
  version = version || '*'
  var options = {
    hostname: 'registry.npmjs.org',
    path: ('/' + pkgName)
  }

  return new Promise(function (fulfill, reject) {

    if (pkgName === '') {
      reject(errorHandler(undefined, 'Package doesn\'t exist.'))
    }

    http.get(options, function (res) {

      if (res.statusCode !== 200) {
        reject(errorHandler(pkgName, 'Package doesn\'t exist.'))
      }

      var data = ''
      res
        .setEncoding('utf8')
        .on('data', function (chunk) {
          data += chunk
        })
        .on('end', function (){
          try{
            data = JSON.parse(data)
            if (!data.versions) {
              reject(errorHandler(pkgName, 'Package doesn\'t exist.'))
            }
            version = semver.maxSatisfying(Object.keys(data.versions), version)

            if (!version) {
              reject(errorHandler(pkgName, 'Version doesn\'t exist'))
            }
            fulfill(version)
          } catch(err) {
            reject(err)
          }
        })
    })
  })
}

function errorHandler (pkgName, msg) {
  return {
    pkgName,
    msg
  }
}