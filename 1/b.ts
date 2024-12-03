import { leftSide, rightSide } from "./util";

const similarity = leftSide
  .map(
    (leftNum) =>
      leftNum * rightSide.filter((rightNum) => rightNum === leftNum).length
  )
  .reduce((acc, value) => acc + value, 0);

console.log(similarity);
