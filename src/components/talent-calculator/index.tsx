import React, { useState, useEffect } from 'react';

import { ClassTalentType, ClassSpecType, GridDataType } from '../../types/';
import druid from '../../data/talents/druid';
import {
  talentCalcMaker,
  requiresTalentChecker,
  requiredTalentChecker,
  requiredPointsChecker,
  requiredXChecker,
  pointsPerTreeChecker,
  totalPointsChecker,
} from './helpers';
import Grid from './grid/';
import styles from './index.module.css';

const TalentCalculator: React.FC = () => {
  const [talentData, setTalentData] = useState<ClassTalentType | null>(null);

  useEffect(() => {
    setTalentData(talentCalcMaker(druid));
  }, []);

  const totalPoints = totalPointsChecker(talentData!);
  const pointsLeft = 51 - totalPointsChecker(talentData!)!;

  const clickHandler = (i: number, x: number, y: number, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const pointsPerTree = talentData && pointsPerTreeChecker(talentData[i]);
    const newData = [...talentData!];
    const requiresTalent = requiresTalentChecker(newData[i], x, y);
    const requiredTalent = requiredTalentChecker(newData[i], x, y);
    const { value, maxValue } = talentData![i][x][y]!;
    if (e.type === 'click' && value < maxValue && requiresTalent && pointsPerTree! >= x * 5 && pointsLeft) {
      newData[i][x][y]!.increment();
    } else if (e.type === 'contextmenu' && value > 0 && requiredTalent) {
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
          <>{pointsLeft}</>
        </div>
      </div>
    </>
  );
};

export default TalentCalculator;
