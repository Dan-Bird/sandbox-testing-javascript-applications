const expect = require('chai').expect;

const isPalindrome = require('../src/palindrome');

describe('Palindrome test', () => {
  it('should pass the canary test', () => {
    expect(true).to.be.true;
  });

  it('should return true for argument "mom"', () => {
    const word = 'mom';

    const result = isPalindrome(word);

    expect(result).to.be.true;
  });

  it('should return true for argument "dad"', () => {
    const word = 'dad';

    const result = isPalindrome(word);

    expect(result).to.be.true;
  });

  it('should return false for argument "dude"', () => {
    const word = 'dude';

    const result = isPalindrome(word);

    expect(result).to.be.false;
  });

  it('should return true for argument "mom mom"', () => {
    expect(isPalindrome('mom mom')).to.be.true;
  });

  it('should return false for argument "mom dad"', () => {
    expect(isPalindrome('mom dad')).to.be.false;
  });

  it('should return false when argument is an empty string', () => {
    expect(isPalindrome('')).to.be.false;
  });

  it('should return false when argument is two empty spaces', () => {
    expect(isPalindrome('  ')).to.be.false;
  });

  it('should throw an exception if argument is missing', () => {
    const call = () => isPalindrome();

    expect(call).to.throw(Error, 'Invalid argument');
  });
});
