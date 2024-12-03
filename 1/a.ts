import { leftSide, rightSide } from "./util";

const pairedDistances = leftSide.reduce((acc, value, idx) => {
  const distance = Math.abs(value - rightSide[idx]);
  return acc + distance;
}, 0);

console.log(pairedDistances);
