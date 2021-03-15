const locatemeModule = require('../src/locateme');
const onSuccess = locatemeModule.onSuccess;

describe('onSuccess tests', () => {
  it('should call createUrl with longitude and latitude', () => {
    const createUrlSpy = jest.spyOn(locatemeModule, 'createUrl');
    const position = { coords: { latitude: 40.41, longitude: -105.55 } };

    onSuccess(position);

    expect(createUrlSpy).toHaveBeenCalledWith(
      position.coords.latitude,
      position.coords.longitude
    );
  });

  it('should call setLocation with the URL returned from createUrl', () => {
    const url = 'http://example.com';
    const position = { coords: { latitude: 40.41, longitude: -105.55 } };
    const setLocationSpy = jest.spyOn(locatemeModule, 'setLocation');

    jest.spyOn(locatemeModule, 'createUrl').mockImplementation(() => url);

    onSuccess(position);

    expect(setLocationSpy).toHaveBeenCalledWith(window, url);
  });
});
