import React, { useState, useEffect } from "react";

import druid from "../../data/talents/druid";
import { talentCalcMaker, requiresChecker, requiredChecker } from "./helpers";
import Grid from "./grid/";

const TalentCalculator: React.FC = () => {
  const [talentData, setTalentData] = useState<any>([]);
  const [totalPoints, setTotalPoints] = useState<number>(51);
  const [pointsPerTree, setPointsPerTree] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    setTalentData(talentCalcMaker(druid));
  }, []);

  const clickHandler = (
    i: number,
    x: number,
    y: number,
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();
    const requires = requiresChecker(talentData, i, x, y);
    const required = requiredChecker(talentData, i, x, y);
    const newData = [...talentData];
    if (
      e.type === "click" &&
      totalPoints > 0 &&
      newData[i][x][y].value !== newData[i][x][y].maxValue &&
      x * 5 <= pointsPerTree[i] &&
      requires
    ) {
      newData[i][x][y].increment();
      setTotalPoints(totalPoints - 1);
      const newPointsPerTree = [...pointsPerTree];
      newPointsPerTree[i] = pointsPerTree[i] + 1;
      setPointsPerTree(newPointsPerTree);
    } else if (
      e.type === "contextmenu" &&
      newData[i][x][y].value !== 0 &&
      pointsPerTree[i] > 0 &&
      required
    ) {
      newData[i][x][y].decrement();
      setTotalPoints(totalPoints + 1);
      const newPointsPerTree = [...pointsPerTree];
      newPointsPerTree[i] = pointsPerTree[i] - 1;
      setPointsPerTree(newPointsPerTree);
    }
    setTalentData(newData);
  };

  return (
    <>
      {talentData.map((gridData: any, i: number) => {
        return (
          <Grid
            key={i}
            i={i}
            gridData={gridData}
            clickHandler={clickHandler}
            currentPoints={pointsPerTree[i]}
          />
        );
      })}
      <div>{totalPoints}</div>
    </>
  );
};

export default TalentCalculator;
