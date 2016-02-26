# node-version

> Get available version on npmjs.com

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

## Installation

```
npm install --save node-version
```

## Usage

#### node-version(**pakageName**, [**version**])

**version** can be all types of semantic version. Check at [semver](https://www.npmjs.com/package/semver)



```
var nodeVer = require('node-version');

// Get latest version
nodeVer('semver')
  .then(function (res) {
    // do somgthing
  })
  .catch(function (res) {
    // catch error
  }

// Get in range 4.0.5 <= X < 5.0.0
nodeVer('semver', '^4.0.5')
  .then(function (res) {
    // do somgthing
  })
  .catch(function (res) {
    // catch error
  }
```

## Created with
[Yeoman](https://npmjs.org/package/yo) and [Generator-simple-package](https://npmjs.org/package/generator-simple-package)

## License
MIT © [NghiaTTran](https://github.com/nghiattran)

[npm-image]: https://badge.fury.io/js/node-version.svg
[npm-url]: https://npmjs.org/package/node-version
[travis-image]: https://travis-ci.org/nghiattran/node-version.svg?branch=master
[travis-url]: https://travis-ci.org/nghiattran/node-version
[daviddm-image]: https://david-dm.org/nghiattran/node-version.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nghiattran/node-version
[coveralls-image]: https://coveralls.io/repos/nghiattran/node-version/badge.svg
[coveralls-url]: https://coveralls.io/github/nghiattran/node-version
