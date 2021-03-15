const linesCount = require('../src/files');

describe('test server side callback', () => {
  it('should return correct line count for a valid file', () => {
    const callback = async count => {
      await expect(linesCount('src/files.js', callback)).toBe(15);
      return count;
    };

    linesCount('src/flies.js', callback, undefined);
  });

  it('should report an error for an invalid file name', () => {
    const onError = async error => {
      await expect(error).toBe('unable to open file src/flies.js');
    };

    linesCount('src/flies.js', undefined, onError);
  });
});
