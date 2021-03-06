import { Talent } from "../../../data/talents/Classes";
import { classTalentType } from "../../../types/";

export const gridMaker = (spec: (Talent | null)[][]) => {
  const grid: Talent[][] | null[][] = [];
  for (let x = 0; x < 7; x++) {
    grid.push([]);
    for (let y = 0; y < 4; y++) {
      grid[x][y] = spec[x][y];
    }
  }
  return grid;
};

export const talentCalcMaker = (classTalent: classTalentType) => {
  const talentTrees = [];
  for (let i = 0; i < 3; i++) {
    talentTrees.push(gridMaker(classTalent[i]));
  }
  return talentTrees;
};

export const requiresChecker = (
  talentData: any,
  i: number,
  x: number,
  y: number
) => {
  if (
    talentData[i][x][y].requires[0].x !== null &&
    talentData[i][x][y].requires[0].y !== null
  ) {
    const requiresX = talentData[i][x][y].requires[0].x;
    const requiresY = talentData[i][x][y].requires[0].y;
    const requiresTalent = talentData[i][requiresX][requiresY];
    console.log(requiresTalent);
    if (requiresTalent.value === requiresTalent.maxValue) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

export const requiredChecker = (
  talentData: any,
  i: number,
  x: number,
  y: number
) => {
  if (
    talentData[i][x][y].required[0].x !== null &&
    talentData[i][x][y].required[0].y !== null
  ) {
    const requiredX = talentData[i][x][y].required[0].x;
    const requiredY = talentData[i][x][y].required[0].y;
    const requiredTalent = talentData[i][requiredX][requiredY];
    console.log(requiredTalent);
    if (requiredTalent.value === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};
