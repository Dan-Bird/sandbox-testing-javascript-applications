describe('Palindrome test', () => {
  it('should pass the canary test', () => {
    expect(true).to.be.true;
  });

  it('should return true for argument "mom"', () => {
    expect(isPalindrome('mom')).to.be.true;
  });

  it('should return false for argument "dude"', () => {
    expect(isPalindrome('dude')).to.be.false;
  });

  it('should return true for argument "mom mom"', () => {
    expect(isPalindrome('mom mom')).to.be.true;
  });

  it('should return false for argument "dad mom"', () => {
    expect(isPalindrome('dad mom')).to.be.false;
  });

  it('should return false when argument is empty string', () => {
    expect(isPalindrome('')).to.be.false;
  });

  it('should return false for argument of only spaces', () => {
    expect(isPalindrome('  ')).to.be.false;
  });

  it('should throw an exception if argument is missing', () => {
    expect(isPalindrome()).to.throw(Error, 'Invalid argument');
  });
});
