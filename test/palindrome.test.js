const isPalindrome = require('../src/palindrome');

describe('Palindrome test', () => {
  it('should pass the canary test', () => {
    expect(true).toBe(true);
  });

  it('should return true for argument "mom"', () => {
    const word = 'mom';

    const result = isPalindrome(word);

    expect(result).toBe(true);
  });

  it('should return true for argument "dad"', () => {
    const word = 'dad';

    const result = isPalindrome(word);

    expect(result).toBe(true);
  });

  it('should return false for argument "dude"', () => {
    const word = 'dude';

    const result = isPalindrome(word);

    expect(result).toBe(false);
  });

  it('should return true for argument "mom mom"', () => {
    expect(isPalindrome('mom mom')).toBe(true);
  });

  it('should return false for argument "mom dad"', () => {
    expect(isPalindrome('mom dad')).toBe(false);
  });

  it('should return false when argument is an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  it('should return false when argument is two empty spaces', () => {
    expect(isPalindrome('  ')).toBe(false);
  });

  it('should throw an exception if argument is missing', () => {
    const call = () => isPalindrome();

    expect(call).toThrow(Error, 'Invalid argument');
  });
});
