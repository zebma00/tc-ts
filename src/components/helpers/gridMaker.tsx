import { Talent } from "../../constants/Classes";
import { balance } from "../../constants/druid";
import { GridDataType } from "../../constants/Types";

export const gridMaker = () => {
  const grid: Talent[][] | null[][] = [];
  for (let x = 0; x < 7; x++) {
    grid.push([]);
    for (let y = 0; y < 4; y++) {
      grid[x][y] = balance[x][y];
    }
  }
  return grid;
};
