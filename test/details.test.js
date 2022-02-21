const request = require("supertest");
const app = require("../app");

describe("Test details route", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/users/mojombo/details")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});