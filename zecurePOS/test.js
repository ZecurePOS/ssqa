// const helper = require('helper');
const chakram = require('chakram');
expect = chakram.expect;

var assert = require('assert');
describe("UNAUTHORIZED", function () {
  describe("student", function () {
    it("unauthorized user should not be able to open /student manually", function () {
      var response = chakram.get("http://127.0.0.1:1337/student");
      expect(response).to.have.status(401);
      return chakram.wait();
    });
    it("unauthorized user should not be able to open /noteneinsicht manually", function () {
      var response = chakram.get("http://127.0.0.1:1337/noteneinsicht");
      expect(response).to.have.status(401);
      return chakram.wait();
    });
    it("unauthorized user should not be able to open /klausuren manually", function () {
      var response = chakram.get("http://127.0.0.1:1337/klausuren");
      expect(response).to.have.status(401);
      return chakram.wait();
    });
  });
  describe("professor", function () {
    it("unauthorized user should not be able to open /professor manually", function () {
      var response = chakram.get("http://127.0.0.1:1337/professor");
      expect(response).to.have.status(401);
      return chakram.wait();
    });
    it("unauthorized user should not be able to open /p_noten manually", function () {
      var response = chakram.get("http://127.0.0.1:1337/p_noten");
      expect(response).to.have.status(401);
      return chakram.wait();
    });
    it("unauthorized user should not be able to open /p_klausuren manually", function () {
      var response = chakram.get("http://127.0.0.1:1337/p_klausuren");
      expect(response).to.have.status(401);
      return chakram.wait();
    });
  });
  describe("administrator", function () {
    it("unauthorized user should not be able to open /administrator manually", function () {
      var response = chakram.get("http://127.0.0.1:1337/administrator");
      expect(response).to.have.status(401);
      return chakram.wait();
    });
    it("unauthorized user should not be able to open /benutzerverwaltung manually", function () {
      var response = chakram.get("http://127.0.0.1:1337/benutzerverwaltung");
      expect(response).to.have.status(401);
      return chakram.wait();
    });
    it("unauthorized user should not be able to open /notenverwaltung manually", function () {
      var response = chakram.get("http://127.0.0.1:1337/notenverwaltung");
      expect(response).to.have.status(401);
      return chakram.wait();
    });
    it("unauthorized user should not be able to open /faecherverwaltung manually", function () {
      var response = chakram.get("http://127.0.0.1:1337/faecherverwaltung");
      expect(response).to.have.status(401);
      return chakram.wait();
    });
  });
});