const request = require("supertest");
const app = require("../app");

describe("Test user route", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/users")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});