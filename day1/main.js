const { readFileToArray } = require("../utils");

async function main() {
  const inputs = await readFileToArray("day1/input.txt");
  console.log(
    inputs
      .map(mass => Math.floor(mass / 3) - 2)
      .reduce((prev, current) => prev + current)
  );
}

main();
