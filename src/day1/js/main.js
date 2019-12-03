const { readFileToArray } = require("../../utils");

const basicFuelCalc = mass => Math.floor(mass / 3) - 2;
const sum = (prev, current) => prev + current;

function extendedFuelCalc(mass) {
  let fuelCount = basicFuelCalc(mass);
  if (fuelCount <= 0) {
    return 0;
  }
  return fuelCount + extendedFuelCalc(fuelCount);
}

async function main() {
  const inputs = await readFileToArray("input.txt");

  // part 1
  console.log(inputs.map(basicFuelCalc).reduce(sum));

  //part 2
  console.log(inputs.map(extendedFuelCalc).reduce(sum));
}

main();
