const fs = require("fs");
const [Y, M, D] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

const isLeap = (y) => (y % 4 === 0) && (y % 100 !== 0 || y % 400 === 0);

function daysInMonth(y, m) {
  if (m < 1 || m > 12) return 0;
  const mdays = [31, isLeap(y) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return mdays[m - 1];
}

const valid = M >= 1 && M <= 12 && D >= 1 && D <= daysInMonth(Y, M);

if (!valid) {
  console.log(-1);
} else {
  let season;
  if (M >= 3 && M <= 5) season = "Spring";
  else if (M >= 6 && M <= 8) season = "Summer";
  else if (M >= 9 && M <= 11) season = "Fall";
  else season = "Winter";
  console.log(season);
}