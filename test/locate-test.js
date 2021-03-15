describe('locate test', () => {
  it('should register handlers with getCurrentPosition', () => {
    const mockGetCurrentPosition = sandbox
      .mock(navigator.geolocation)
      .expects('getCurrentPosition')
      .withArgs(onSuccess, onError);

    locate();

    mockGetCurrentPosition.verify();
  });
});
