const { setLocation } = require('../src/locateme');

describe('setLocation test', () => {
  it('should set the URL onto location of window', () => {
    const windowStub = {};
    const url = 'http://example.com';

    setLocation(windowStub, url);

    expect(windowStub.location).toBe(url);
  });
});
