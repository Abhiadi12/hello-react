module.exports = {
  ...jest.requireActual(".."),
  _esModule: true,
  //TODO: update the return value using redux or contex
  getSecreatWord: jest.fn().mockReturnValue(Promise.resolve("pretty")),
};
