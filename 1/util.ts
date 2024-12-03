import { readFileSync } from "fs";
import { join } from "path";

const input = readFileSync(join(__dirname, "./input.txt"), "utf-8");
const list = input.trim().split(/\s+/);

export const leftSide = getSideOfList(list, "left");
export const rightSide = getSideOfList(list, "right");

function getSideOfList(l: string[], side: "right" | "left"): number[] {
  return l
    .filter((_, index) => (side === "left" ? index % 2 === 0 : index % 2 === 1))
    .map((value) => +value)
    .sort((a, b) => a - b);
}
