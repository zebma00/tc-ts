import React from 'react';

import { Talent } from '../../../data/talents/Classes';
import { enabledChecker, pointsPerTreeChecker, capitalizer } from '../helpers/';
import Cell from '../cell';
import styles from './grid.module.css';

interface GridProps {
  gridData: Talent[][];
  // Talent | ActiveTalent [][]
  i: number;
  pointsLeft: number;
  selectedClass: string;
  specName: string;
  clickHandler: (i: number, x: number, y: number, e: React.MouseEvent<HTMLElement>) => void;
}

const Grid: React.FC<GridProps> = ({ gridData, i, pointsLeft, selectedClass, specName, clickHandler }) => {
  const currentPoints = pointsPerTreeChecker(gridData);

  return (
    <div className={styles.tree}>
      <div className={styles.treeHeader}>
        <>{capitalizer(specName)}</>
        <br />
        <>Current points: {currentPoints}</>
      </div>
      <div style={{ backgroundImage: `url("/img/background/${selectedClass}/${specName}.jpg")` }} className={styles.grid}>
        {gridData.map((row, x) => {
          return row.map((cell, y) => {
            if (cell) {
              const color = enabledChecker(gridData, x, y, currentPoints, pointsLeft);
              return <Cell key={`${x}, ${y}`} i={i} x={x} y={y} cellData={cell} color={color} clickHandler={clickHandler} />;
            } else {
              return <div key={`${x}, ${y}`} />;
            }
          });
        })}
      </div>
    </div>
  );
};
export default Grid;
