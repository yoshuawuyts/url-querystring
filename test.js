/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var split = require('./index');

/**
 * Test
 */

describe('url-querystring', function() {
  it('should assert input types', function() {
    split.bind(split, 123)
      .should.throw('url-querystring: url should be a string');

    split.bind(split, 'foo')
      .should.not.throw('url-querystring: url should be a string');
  });

  it('should get the qs part of a string', function() {
    split('https://gist.github.com/yoshuawuyts/c33510f7793f46fe5a33?tab=foo&bar=har')
      .should.eql('tab=foo&bar=har');
  });
});
