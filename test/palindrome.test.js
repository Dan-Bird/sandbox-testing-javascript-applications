const isPalindrome = require('../src/palindrome');

describe('Palindrome test', () => {
  it('should pass the canary test', () => {
    expect(true).toBe(true);
  });

  it('should return true for argument "mom"', () => {
    expect(isPalindrome('mom')).toBe(true);
  });

  it('should return false for argument "dude"', () => {
    expect(isPalindrome('dude')).toBe(false);
  });

  it('should return true for argument "mom mom"', () => {
    expect(isPalindrome('mom mom')).toBe(true);
  });

  it('should return false for argument "dad mom"', () => {
    expect(isPalindrome('dad mom')).toBe(false);
  });

  it('should return false when argument is empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  it('should return false for argument of only spaces', () => {
    expect(isPalindrome('  ')).toBe(false);
  });

  it('should throw an exception if argument is missing', () => {
    expect(() => isPalindrome()).toThrow(Error, 'Invalid argument');
  });
});
