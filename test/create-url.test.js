const { createUrl } = require('../src/locateme');
describe('create-url test', () => {
  it('should return a Google maps URL, given a longitude and latitude', () => {
    const lat = -33.857;
    const lon = 151.215;

    const url = createUrl(lat, lon);

    expect(url).toBe(`https://www.google.co.uk/maps/@${lat},${lon},12.14z`);
  });

  it('should return a Google maps URL, given a longitude and latitude', () => {
    const lat = -12.876;
    const lon = 224.675;

    const url = createUrl(lat, lon);

    expect(url).toBe(`https://www.google.co.uk/maps/@${lat},${lon},12.14z`);
  });

  it('should return empty string if latitude is undefined', () => {
    const lat = undefined;
    const lon = 188.123;

    const url = createUrl(lat, lon);

    expect(url).toBe('');
  });

  it('should return empty string if longitude is undefined', () => {
    const lat = 188.123;
    const lon = undefined;

    const url = createUrl(lat, lon);

    expect(url).toBe('');
  });
});
