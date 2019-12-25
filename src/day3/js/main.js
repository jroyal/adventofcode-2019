const { readFileToArray } = require("../../utils");
const crypto = require("crypto");

class Point {
  constructor(x, y, stepCount) {
    this.x = x;
    this.y = y;
    this.stepCount = stepCount;
    this.totalSteps = 0;
  }

  calculateManhattanDistance() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
}

function hash(point) {
  return crypto
    .createHash("md5")
    .update(JSON.stringify({ x: point.x, y: point.y }))
    .digest("hex");
}

function movePoint(currentPoint, move, f) {
  let count = parseInt(move.substring(1), 10);
  let dir = move.substring(0, 1);
  for (let i = 0; i < count; i++) {
    let x = currentPoint.x;
    let y = currentPoint.y;
    if (dir == "U") {
      y += 1;
    } else if (dir == "R") {
      x += 1;
    } else if (dir == "D") {
      y -= 1;
    } else if (dir == "L") {
      x -= 1;
    }

    currentPoint = new Point(x, y, currentPoint.stepCount + 1);
    f(currentPoint);
  }
  return currentPoint;
}

function findIntersections(wire1, wire2) {
  let currentPoint = new Point(0, 0, 0);
  let points = new Map();
  let intersections = [];

  wire1.map(move => {
    movePoint(currentPoint, move, newPoint => {
      currentPoint = newPoint;
      points.set(hash(newPoint), newPoint);
    });
  });

  currentPoint = new Point(0, 0, 0);
  wire2.map(move => {
    movePoint(currentPoint, move, newPoint => {
      currentPoint = newPoint;
      let key = hash(newPoint);
      if (points.has(hash(newPoint))) {
        let oldPoint = points.get(key);
        newPoint.totalSteps = oldPoint.stepCount + newPoint.stepCount;
        intersections.push(newPoint);
      }
    });
  });
  return intersections;
}

function closestIntersection(wire1, wire2) {
  let intersections = findIntersections(wire1, wire2);

  return intersections.reduce(
    (largest, newest) =>
      newest.calculateManhattanDistance() < largest || largest == 0
        ? newest.calculateManhattanDistance()
        : largest,
    0
  );
}
exports.closestIntersection = closestIntersection;

function shortestCombinedPath(wire1, wire2) {
  let intersections = findIntersections(wire1, wire2);
  return intersections.reduce(
    (largest, newest) =>
      newest.totalSteps < largest || largest == 0 ? newest.totalSteps : largest,
    0
  );
}
exports.shortestCombinedPath = shortestCombinedPath;

async function main() {
  const rawInputs = await readFileToArray("input.txt");
  const input1 = rawInputs[0].split(",");
  const input2 = rawInputs[1].split(",");
  // part 1
  console.log(closestIntersection(input1, input2));

  // part 2
  console.log(shortestCombinedPath(input1, input2));
}
main();
