import React, { useState, useEffect } from "react";

import druid from "../../data/talents/druid";
import {
  talentCalcMaker,
  requiresTalentChecker,
  requiredTalentChecker,
  requiredPointsChecker,
} from "./helpers";
import Grid from "./grid/";
import styles from "./index.module.css";

const TalentCalculator: React.FC = () => {
  const [talentData, setTalentData] = useState<any>([]);
  const [totalPoints, setTotalPoints] = useState<number>(51);
  const [pointsPerTree, setPointsPerTree] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    setTalentData(talentCalcMaker(druid));
    setTotalPoints(51);
    setPointsPerTree([0, 0, 0]);
  }, []);

  const clickHandler = (
    i: number,
    x: number,
    y: number,
    e: React.MouseEvent<HTMLElement>
  ) => {
    console.log(talentData[i][x][y], x, y);
    e.preventDefault();
    const requiresTalent = requiresTalentChecker(talentData[i], x, y);
    const requiredTalent = requiredTalentChecker(talentData[i], x, y);
    const requiredPoints = requiredPointsChecker(pointsPerTree[i], x);
    const newData = [...talentData];
    if (
      e.type === "click" &&
      totalPoints > 0 &&
      newData[i][x][y].value < newData[i][x][y].maxValue &&
      requiredPoints &&
      requiresTalent
    ) {
      newData[i][x][y].increment();
      setTotalPoints(totalPoints - 1);
      const newPointsPerTree = [...pointsPerTree];
      newPointsPerTree[i] = pointsPerTree[i] + 1;
      setPointsPerTree(newPointsPerTree);
    } else if (
      e.type === "contextmenu" &&
      newData[i][x][y].value > 0 &&
      pointsPerTree[i] > 0 &&
      requiredPoints &&
      requiredTalent
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
      <div className={styles.tcContainer}>
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
      </div>
      <div className={styles.specHeader}>{totalPoints}</div>
    </>
  );
};

export default TalentCalculator;
