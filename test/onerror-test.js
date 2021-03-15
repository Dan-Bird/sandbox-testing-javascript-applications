describe('onError test', () => {
  it('should set the error DOM element', () => {
    const domElement = { innerHTML: '' };
    const message = "you're kidding";
    const positionError = { message: message };

    sandbox
      .stub(document, 'getElementById')
      .withArgs('error')
      .returns(domElement);

    onError(positionError);

    expect(domElement.innerHTML).to.be.eql(message);
  });
});
