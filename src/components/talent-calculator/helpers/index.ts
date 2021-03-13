import { Talent } from '../../../data/talents/Classes';
import { ClassTalentType, ClassSpecType } from '../../../types/';

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

export const talentCalcMaker = (classTalent: ClassTalentType) => {
  const talentTrees = [];
  for (let i = 0; i < 3; i++) {
    talentTrees.push(gridMaker(classTalent[i]));
  }
  return talentTrees;
};

export const requiresTalentChecker = (talentData: any, x: number, y: number) => {
  if (talentData[x][y].requires[0].x != null && talentData[x][y].requires[0].y != null) {
    const requiresX = talentData[x][y].requires[0].x;
    const requiresY = talentData[x][y].requires[0].y;
    const requiresTalent = talentData[requiresX][requiresY];

    if (requiresTalent.value === requiresTalent.maxValue) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

export const requiredTalentChecker = (talentData: any, x: number, y: number) => {
  if (talentData[x][y].required[0].x !== null && talentData[x][y].required[0].y !== null) {
    const requiredX = talentData[x][y].required[0].x;
    const requiredY = talentData[x][y].required[0].y;
    const requiredTalent = talentData[requiredX][requiredY];
    if (requiredTalent.value === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

export const requiredPointsChecker = (pointsPerTree: number, x: number) => {
  return x * 5 <= pointsPerTree ? true : false;
};

export const enabledChecker = (talentData: any, x: number, y: number, pointsPerTree: number | undefined) => {
  if (talentData[x][y].value === talentData[x][y].maxValue) {
    return 'yellow';
  } else if (requiresTalentChecker(talentData, x, y) && requiredPointsChecker(pointsPerTree!, x)) {
    return 'green';
  } else {
    return 'grey';
  }
};

export const requiredXChecker = (specData: ClassSpecType) => {
  console.log(
    'REQUIRE X',
    [...specData!].map(row => {
      // return row.filter(talent)
    })
  );
};

export const pointsPerTreeChecker = (specData: ClassSpecType) => {
  return [...specData!]
    .map(row => {
      return row
        .filter(talent => {
          return !!talent;
        })
        .map(talent => {
          return talent?.value;
        });
    })
    .flat(1)
    .reduce((a, b) => {
      return a! + b!;
    });
};

export const totalPointsChecker = (talentData: ClassTalentType) => {
  const totalPoints = [];
  if (talentData) {
    for (let i = 0; i < 3; i++) {
      totalPoints.push(pointsPerTreeChecker(talentData[i]));
    }
    return totalPoints.reduce((a, b) => {
      return a! + b!;
    });
  }
};
