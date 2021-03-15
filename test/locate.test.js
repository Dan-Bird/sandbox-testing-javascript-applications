const { locate, onSuccess, onError } = require('../src/locateme');

describe('locate test', () => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementation((success, error) => 0),
  };

  beforeAll(() => {
    global.navigator.geolocation = mockGeolocation;

    jest.spyOn(global.navigator.geolocation, 'getCurrentPosition');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should register handlers with getCurrentPosition', () => {
    locate();

    expect(
      global.navigator.geolocation.getCurrentPosition
    ).toHaveBeenCalledWith(onSuccess, onError);
  });
});
