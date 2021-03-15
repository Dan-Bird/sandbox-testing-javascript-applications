const expect = require('chai').expect;
const Util = require('../src/util');

describe('Util tests', () => {
  it('should pass the canary test', () => {
    expect(true).to.eql(true);
  });

  let util;

  beforeEach(() => {
    util = Object.assign({}, Util());
  });

  it('should convert 32F to 0C', () => {
    const fahrenheit = 32;

    const celsius = util.f2c(fahrenheit);

    expect(celsius).to.eql(0);
  });

  it('should return 10C when given 50F', () => {
    const fahrenheit = 50;

    const celsius = util.f2c(fahrenheit);

    expect(celsius).to.eql(10);
  });
});
