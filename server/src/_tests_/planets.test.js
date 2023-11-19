const superTest = require('supertest');
const app = require('../app');

describe('GET /planets', () => {
    describe('get all planets', () => {
        it("should response with a 200 status code", async () => {
            await superTest(app).get("/planets").expect(200);
        });
    });
});