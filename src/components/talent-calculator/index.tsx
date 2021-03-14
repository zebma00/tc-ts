import React, { useState, useEffect } from 'react';

import { ClassTalentType, ClassSpecType, GridDataType } from '../../types/';
import druid from '../../data/talents/druid';
import {
  talentCalcMaker,
  requiresTalentChecker,
  requiredTalentChecker,
  requiredXChecker,
  pointsPerTreeChecker,
  totalPointsChecker,
  pointsUpToXChecker,
} from './helpers';
import Grid from './grid/';
import styles from './index.module.css';

const TalentCalculator: React.FC = () => {
  const [talentData, setTalentData] = useState<ClassTalentType | null>(null);

  useEffect(() => {
    setTalentData(talentCalcMaker(druid));
  }, []);

  const totalPoints = totalPointsChecker(talentData!);
  // const pointsLeft = 51 - totalPointsChecker(talentData!)!;

  const clickHandler = (i: number, x: number, y: number, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const newData = [...talentData!];
    const pointsPerTree = pointsPerTreeChecker(talentData![i])!;
    const requiredX = requiredXChecker(talentData![i]);
    const upToXPoints = pointsUpToXChecker(talentData![i], requiredX)!;
    const requiresTalent = requiresTalentChecker(newData[i], x, y);
    const requiredTalent = requiredTalentChecker(newData[i], x, y);
    const { value, maxValue } = talentData![i][x][y]!;
    console.log('UP TO X', upToXPoints, 'requiredX', requiredX);
    if (e.type === 'click' && value < maxValue && requiresTalent) {
      newData[i][x][y]!.increment();
    } else if (e.type === 'contextmenu' && value > 0 && requiredTalent && requiredX * 5 <= upToXPoints) {
      newData[i][x][y]!.decrement();
    }
    setTalentData(newData);
  };

  return (
    <>
      <div className={styles.tcContainer}>
        {talentData?.map((gridData: any, i: number) => {
          return <Grid key={i} i={i} gridData={gridData} clickHandler={clickHandler} />;
        })}
        <div className={styles.tcFooter}>
          <>{totalPoints}</>
          <br />
          {/* <>{pointsLeft}</> */}
        </div>
      </div>
    </>
  );
};

export default TalentCalculator;
