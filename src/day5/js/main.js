const { readFileToArray, ask } = require("../../utils");

function inputMode(instruction, digit) {
  return Math.floor((instruction / Math.pow(10, digit - 1)) % 10);
}

function getParameter(memory, pos, instruction, n) {
  return inputMode(instruction, 2 + n)
    ? memory[pos + n]
    : memory[memory[pos + n]];
}

function multiplication(memory, pos, instruction) {
  let input1 = getParameter(memory, pos, instruction, 1);
  let input2 = getParameter(memory, pos, instruction, 2);
  let dest = memory[pos + 3];
  memory[dest] = input1 * input2;
  return pos + 4;
}

function addition(memory, pos, instruction) {
  let input1 = getParameter(memory, pos, instruction, 1);
  let input2 = getParameter(memory, pos, instruction, 2);
  let dest = memory[pos + 3];
  memory[dest] = input1 + input2;
  return pos + 4;
}

function jumpIfTrue(memory, pos, instruction) {
  let input = getParameter(memory, pos, instruction, 1);
  return input ? getParameter(memory, pos, instruction, 2) : pos + 3;
}

function jumpIfFalse(memory, pos, instruction) {
  let input = getParameter(memory, pos, instruction, 1);
  return input == 0 ? getParameter(memory, pos, instruction, 2) : pos + 3;
}

function lessThan(memory, pos, instruction) {
  let input1 = getParameter(memory, pos, instruction, 1);
  let input2 = getParameter(memory, pos, instruction, 2);
  let dest = memory[pos + 3];
  memory[dest] = input1 < input2 ? 1 : 0;
  return pos + 4;
}

function equals(memory, pos, instruction) {
  let input1 = getParameter(memory, pos, instruction, 1);
  let input2 = getParameter(memory, pos, instruction, 2);
  let dest = memory[pos + 3];
  memory[dest] = input1 == input2 ? 1 : 0;
  return pos + 4;
}

async function input(memory, pos, instruction) {
  let input = await ask("input: ");
  memory[memory[pos + 1]] = parseInt(input, 10);
  return pos + 2;
}

function output(memory, pos, instruction) {
  console.log(memory[memory[pos + 1]]);
  return pos + 2;
}

const OPCODES = new Map([
  [1, addition],
  [2, multiplication],
  [3, input],
  [4, output],
  [5, jumpIfTrue],
  [6, jumpIfFalse],
  [7, lessThan],
  [8, equals]
]);

async function process(inputs) {
  let pos = 0;

  while (pos < inputs.length) {
    let instruction = inputs[pos];
    let ops = instruction % 100;

    if (ops === 99) {
      return inputs;
    }

    if (OPCODES.has(ops)) {
      pos = await OPCODES.get(ops)(inputs, pos, instruction);
    } else {
      console.log("SOMETHING BROKE", ops, inputs);
      break;
    }
  }
  return inputs;
}
exports.process = process;

function parseInput(rawInputs) {
  return rawInputs[0].split(",").map(x => parseInt(x, 10));
}

async function main() {
  const rawInputs = await readFileToArray("input.txt");
  const inputs = parseInput(rawInputs);

  await process(inputs);
}

main();
