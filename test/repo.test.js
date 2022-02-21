const request = require("supertest");
const app = require("../app");

describe("Test repo route", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/users/mojombo/repos")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});