const linesCount = require('../src/files');
require('jest');

describe('test promises', () => {
  it('should return the correct line count for a valid file', done => {
    const checkCount = count => {
      expect(count).toBe(15);

      done();
    };

    linesCount('src/files.js').then(checkCount);
  });

  it('should return the correct line count - using return', () => {
    const callback = count => {
      expect(count).toBe(15);
    };

    return linesCount('src/files.js').then(callback);
  });

  it('should report an error for an invalid file name', () => {
    return expect(linesCount('src/flies.js')).rejects.toThrow(
      Error,
      'unable to open file src/flies.js'
    );
  });
});
