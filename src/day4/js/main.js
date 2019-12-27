function isValidNumber(num, only2 = false) {
  let str = String(num);
  if (str.length != 6) {
    return false;
  }

  let prevMax = 0;
  let counts = {};
  for (let char of str) {
    let i = parseInt(char, 10);
    if (i >= prevMax) {
      prevMax = i;

      counts[char] != undefined
        ? (counts[char] = counts[char] + 1)
        : (counts[char] = 1);
    } else {
      return false;
    }
  }

  let hasPair = Object.keys(counts).some(key =>
    only2 ? counts[key] == 2 : counts[key] >= 2
  );

  return hasPair;
}
exports.isValidNumber = isValidNumber;

function validCombos(start, end, only2) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (isValidNumber(i, only2)) {
      count++;
    }
  }
  return count;
}
exports.validCombos = validCombos;

async function main() {
  const input = "136760-595730".split("-");

  // part 1
  console.log(validCombos(input[0], input[1]));

  // part 2
  console.log(validCombos(input[0], input[1], true));
}
main();
