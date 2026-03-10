import fs from "fs";

const input = fs.readFileSync("inputs/day2.txt", "utf8").trim();

function isSafe(levels) {
  let direction = 0;

  for (let i = 1; i < levels.length; i++) {
    const diff = levels[i] - levels[i - 1];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) return false;

    if (direction === 0) direction = Math.sign(diff);
    else if (Math.sign(diff) !== direction) return false;
  }

  return true;
}

const safeReports = input
  .split("\n")
  .map(line => line.split(" ").map(Number))
  .filter(isSafe).length;

console.log(safeReports);
