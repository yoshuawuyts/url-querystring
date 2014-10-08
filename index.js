/**
 * Module dependencies
 */

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

  var nw = url.split('?');
  if (nw.length != 2) return '';
  return nw[1];
}
