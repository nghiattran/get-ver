
'use strict';
var semver = require('semver');
var http = require('http');

module.exports = function (pkgName, version){
  version = version || '*';
  var options = {
    hostname: 'registry.npmjs.org',
    path: '/' + pkgName
  };

  return new Promise(function (fulfill, reject) {
    http.get(options, function (res) {

      if (res.statusCode !== 200) {
        reject(pkgName + ' doesn\'t exist.');
      }

      var data = '';
      res
        .setEncoding('utf8')
        .on('data', function (chunk) {
          data += chunk;
        })
        .on('end', function (){
          try{
            data = JSON.parse(data);
          } catch(err) {
            reject(err)
          }

          version = semver.maxSatisfying(Object.keys(data.versions), version);

          if (!version) {
            reject('Version doesn\'t exist')
          }
          fulfill(version);
        })
    })
  })
};