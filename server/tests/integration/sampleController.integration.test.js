const express = require('express');
const request = require('supertest');
const sampleController = require('../../src/controllers/sampleController');

describe('Sample Controller Integration', () => {
  let app;
  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.post('/double', sampleController.doubleValue);
  });

  it('POST /double returns doubled value', async () => {
    const res = await request(app)
      .post('/double')
      .send({ value: 5 });
    expect(res.body).toEqual({ result: 10 });
  });
}); 