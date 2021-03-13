import React from 'react';

import { Talent } from '../../../data/talents/Classes';
import { enabledChecker, pointsPerTreeChecker } from '../helpers/';
import Cell from '../cell';
import styles from './grid.module.css';

interface GridProps {
  gridData: Talent[][];
  i: number;
  clickHandler: (i: number, x: number, y: number, e: React.MouseEvent<HTMLElement>) => void;
}

const Grid: React.FC<GridProps> = ({ i, gridData, clickHandler }) => {
  const currentPoints = pointsPerTreeChecker(gridData);

  return (
    <div>
      <>Current points: {currentPoints}</>
      <div className={styles.grid}>
        {gridData.map((row, x) => {
          return row.map((cell, y) => {
            if (cell) {
              const color = enabledChecker(gridData, x, y, currentPoints);
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
