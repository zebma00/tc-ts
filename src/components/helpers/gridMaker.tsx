import { Talent } from "../../constants/Classes";

import { GridDataType } from "../../constants/Types";

export const gridMaker = () => {
  const grid: Talent[][] = [];
  for (let x = 0; x < 7; x++) {
    grid.push([]);
    for (let y = 0; y < 4; y++) {
      grid[x][y] = new Talent(x, y, "name", "description", 5, [1, 2, 3, 4, 5]);
    }
  }
  return grid;
};
