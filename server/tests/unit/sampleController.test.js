// Sample unit test for a controller function
const sampleController = require('../../src/controllers/sampleController');

describe('sampleController', () => {
  it('should return the correct value', () => {
    const req = { body: { value: 2 } };
    const res = { json: jest.fn() };
    sampleController.doubleValue(req, res);
    expect(res.json).toHaveBeenCalledWith({ result: 4 });
  });
}); 