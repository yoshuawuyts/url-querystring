/**
 * Module dependencies
 */

var qs = require('querystring');
var assert = require('assert');

/**
 * Expose `split()`.
 */

module.exports = split;

/**
 * Splice a `querystring` from an `url`;
 *
 * @param {String} url
 * @return {String}
 * @api public
 */

function split(url) {
  assert.equal(typeof url, 'string', 'url-querystring: url should be a string');

  var res = {};
  var nw = url.split('?');

  res.url = nw[0];
  res.qs = nw.length == 2
    ? qs.parse(nw[1])
    : {};

  return res;
}
