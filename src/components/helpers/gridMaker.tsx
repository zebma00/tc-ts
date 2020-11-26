import { Talent } from "../../constants/Classes";

import { GridDataType } from "../../constants/Types";

export const gridMaker = () => {
  const grid: Talent[][] = [];
  for (let x = 0; x < 7; x++) {
    grid.push([]);
    for (let y = 0; y < 4; y++) {
      grid[x][y] = {
        x: x,
        y: y,
        name: "HEJ",
        description: "TEST",
        value: 0,
        maxValue: 5,
        valueIteration: [1, 2, 3, 4, 5],
        increment() {
          if (this.value < this.maxValue) {
            this.value++;
          }
        },
        decrement() {
          if (this.value > 0) {
            this.value--;
          }
        },
      };
    }
  }
  return grid;
};
