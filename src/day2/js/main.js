const { readFileToArray } = require("../../utils");

function process(inputs) {
  let pos = 0;

  while (pos < inputs.length) {
    let ops = inputs[pos];
    let input1 = inputs[inputs[pos + 1]];
    let input2 = inputs[inputs[pos + 2]];
    let dest = inputs[pos + 3];

    if (ops === 99) {
      return inputs;
    } else if (ops === 1) {
      // addition
      inputs[dest] = input1 + input2;
    } else if (ops === 2) {
      // multiple
      inputs[dest] = input1 * input2;
    } else {
      console.log("SOMETHING BROKE");
    }

    pos += 4;
  }
  return inputs;
}
exports.process = process;

async function main() {
  const rawInputs = await readFileToArray("input.txt");
  const inputs = rawInputs[0].split(",").map(x => parseInt(x, 10));

  // part 1
  console.log(process(inputs.slice(0))[0]);

  // part 2
  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      let clonedInputs = inputs.slice(0);
      clonedInputs[1] = i;
      clonedInputs[2] = j;
      if (process(clonedInputs)[0] === 19690720) {
        console.log(i, j, 100 * i + j);
        break;
      }
    }
  }
}

main();
