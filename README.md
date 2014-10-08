# url-querystring
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Split an url into a `qs` and `url` component. Also unwraps the `qs` component
by calling `querystring.parse` under the hood.

## Installation
```bash
npm install url-querystring
```

## Usage
```js
var extract = require('url-querystring');
var qs = require('querystring');

var res = extract('http://foobar.com/hello?tab=hello&method=something');
// => '{
//       url: 'http://foobar.com/hello',
//       qs: {
//         tab: hello,
//         method: something
//       }
//     }'

qs.parse(res.qs);
// => {tab: hello, method: something}
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/url-querystring.svg?style=flat-square
[npm-url]: https://npmjs.org/package/url-querystring
[travis-image]: https://img.shields.io/travis/yoshuawuyts/url-querystring.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/url-querystring
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/url-querystring.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/url-querystring?branch=master
[downloads-image]: http://img.shields.io/npm/dm/url-querystring.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/url-querystring
