const fs = require("fs");
const readline = require("readline");

/**
 * Reads a file line by line into an array
 */
async function readFileToArray(filePath) {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  let lines = [];
  for await (const line of rl) {
    lines.push(line);
  }
  return lines;
}
exports.readFileToArray = readFileToArray;

/**
 * Prompts the user for an input
 */
function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve, reject) => {
    rl.question(question, input => {
      rl.close();
      resolve(input);
    });
  });
}
exports.ask = ask;
