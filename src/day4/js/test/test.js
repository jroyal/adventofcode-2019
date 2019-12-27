var assert = require("assert");
var { isValidNumber } = require("../main");

describe("isValidNumber", function() {
  describe("part1", function() {
    it("example 1", function() {
      assert.equal(isValidNumber(111111), true);
    });

    it("example 2", function() {
      assert.equal(isValidNumber(223450), false);
    });

    it("example 3", function() {
      assert.equal(isValidNumber(123789), false);
    });
  });

  describe("part2", function() {
    it("example 1", function() {
      assert.equal(isValidNumber(111111, true), false);
    });

    it("example 2", function() {
      assert.equal(isValidNumber(112233, true), true);
    });

    it("example 3", function() {
      assert.equal(isValidNumber(123444, true), false);
    });
    it("example 4", function() {
      assert.equal(isValidNumber(111122, true), true);
    });
  });
});
