var assert = require("assert");
var { process } = require("../main");

describe("day2", function() {
  it("example 1", function() {
    const input = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
    const expectedOutput = [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50];
    assert.deepEqual(process(input), expectedOutput);
  });

  it("example 2", function() {
    const input = [1, 0, 0, 0, 99];
    const expectedOutput = [2, 0, 0, 0, 99];
    assert.deepEqual(process(input), expectedOutput);
  });

  it("example 3", function() {
    const input = [2, 3, 0, 3, 99];
    const expectedOutput = [2, 3, 0, 6, 99];
    assert.deepEqual(process(input), expectedOutput);
  });

  it("example 4", function() {
    const input = [2, 4, 4, 5, 99, 0];
    const expectedOutput = [2, 4, 4, 5, 99, 9801];
    assert.deepEqual(process(input), expectedOutput);
  });

  it("example 5", function() {
    const input = [1, 1, 1, 4, 99, 5, 6, 0, 99];
    const expectedOutput = [30, 1, 1, 4, 2, 5, 6, 0, 99];
    assert.deepEqual(process(input), expectedOutput);
  });
});
