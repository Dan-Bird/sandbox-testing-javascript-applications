describe('onSuccess tests', () => {
  it('should call createUrl with longitude and latitude', () => {
    const createUrlSpy = sandbox.spy(window, 'createUrl');
    const position = { coords: { latitude: 40.41, longitude: -105.55 } };

    onSuccess(position);

    expect(createUrlSpy).to.have.been.calledWith(
      position.coords.latitude,
      position.coords.longitude
    );
  });

  it('should call setLocation with the URL returned from createUrl', () => {
    const url = 'http://example.com';
    const position = { coords: { latitude: 40.41, longitude: -105.55 } };
    const setLocationSpy = sandbox.spy(window, 'setLocation');

    sandbox.stub(window, 'createUrl').returns(url);

    onSuccess(position);

    expect(setLocationSpy).to.have.been.calledWith(window, url);
  });
});
