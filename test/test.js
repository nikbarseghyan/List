const chai = require("chai");
const expect = chai.expect;
const index = require('../src');

//! Example
describe("index", function () {
  it("should be a function", function () {
    expect(index).to.be.a("function");
  });
  it("should take one parameter", function () {
    expect(
      index.bind(null, { param1: 5, param2: 345, param3: 98 }))
      .to.not.throw(Error);
  });
  it("should throw error if the parameter is missing", function () {
    expect(index.bind(null, {})).to.throw(Error);
  });
  it("should throw error if the parameter does not have 3 values", function () {
    expect(index.bind(null, { param1: 4, param2: 1 })).to.throw(Error);
  });
  it("should return the sum of three values", function () {
    expect(index({ param1: 1, param2: 2, param3: 3 })).to.equal(6);
  });
});
