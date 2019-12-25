var assert = require("assert");
var { closestIntersection, shortestCombinedPath } = require("../main");

describe("day3", function() {
  describe("closestIntersection", function() {
    it("example 1", function() {
      const input1 = ["R8", "U5", "L5", "D3"];
      const input2 = ["U7", "R6", "D4", "L4"];
      const expectedOutput = 6;
      assert.deepEqual(closestIntersection(input1, input2), expectedOutput);
    });

    it("example 2", function() {
      const input1 = "R75,D30,R83,U83,L12,D49,R71,U7,L72".split(",");
      const input2 = "U62,R66,U55,R34,D71,R55,D58,R83".split(",");
      const expectedOutput = 159;
      assert.deepEqual(closestIntersection(input1, input2), expectedOutput);
    });

    it("example 3", function() {
      const input1 = "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51".split(",");
      const input2 = "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7".split(",");
      const expectedOutput = 135;
      assert.deepEqual(closestIntersection(input1, input2), expectedOutput);
    });
  });

  describe("shortestCombinedPath", function() {
    it("example 1", function() {
      const input1 = ["R8", "U5", "L5", "D3"];
      const input2 = ["U7", "R6", "D4", "L4"];
      const expectedOutput = 30;
      assert.deepEqual(shortestCombinedPath(input1, input2), expectedOutput);
    });

    it("example 2", function() {
      const input1 = "R75,D30,R83,U83,L12,D49,R71,U7,L72".split(",");
      const input2 = "U62,R66,U55,R34,D71,R55,D58,R83".split(",");
      const expectedOutput = 610;
      assert.deepEqual(shortestCombinedPath(input1, input2), expectedOutput);
    });

    it("example 3", function() {
      const input1 = "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51".split(",");
      const input2 = "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7".split(",");
      const expectedOutput = 410;
      assert.deepEqual(shortestCombinedPath(input1, input2), expectedOutput);
    });
  });
});
