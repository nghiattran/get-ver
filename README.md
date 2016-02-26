# get-ver

> Get available version on npmjs.com

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

## Installation

```
npm install --save get-ver
```

## Usage

#### get-ver(**pakageName**, [**version**])

**version** can be all types of semantic version. Check at [semver](https://www.npmjs.com/package/semver)



```
var getVer = require('get-ver');

// Get latest version
getVer('semver')
  .then(function (res) {
    // do somgthing
  })
  .catch(function (res) {
    // catch error
  }

// Get in range 4.0.5 <= X < 5.0.0
getVer('semver', '^4.0.5')
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

[npm-image]: https://badge.fury.io/js/get-ver.svg
[npm-url]: https://npmjs.org/package/get-ver
[travis-image]: https://travis-ci.org/nghiattran/get-ver.svg?branch=master
[travis-url]: https://travis-ci.org/nghiattran/get-ver
[daviddm-image]: https://david-dm.org/nghiattran/get-ver.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nghiattran/get-ver
[coveralls-image]: https://coveralls.io/repos/nghiattran/get-ver/badge.svg
[coveralls-url]: https://coveralls.io/github/nghiattran/get-ver
