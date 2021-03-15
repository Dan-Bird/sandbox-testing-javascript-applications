const { onError } = require('../src/locateme');

describe('onError test', () => {
  it('should set the error DOM element', () => {
    const domElement = { innerHTML: '' };
    const message = "you're kidding";
    const positionError = { message: message };

    jest
      .spyOn(document, 'getElementById')
      .mockImplementation(elementId => domElement);

    onError(positionError);

    expect(domElement.innerHTML).toBe(message);
  });
});
