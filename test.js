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
    var gist = split('https://gist.github.com/yoshuawuyts/c33510f7793f46fe5a33?tab=foo&bar=har');

    gist.url.should.eql('https://gist.github.com/yoshuawuyts/c33510f7793f46fe5a33');
    gist.qs.should.eql('tab=foo&bar=har');

    var panda = split('sadpanda.com');
    panda.url.should.eql('sadpanda.com');
    panda.qs.should.eql('');

    var foobar = split('http://foobar.com?')
    foobar.url.should.eql('http://foobar.com');
    foobar.qs.should.eql('');
  });
});
