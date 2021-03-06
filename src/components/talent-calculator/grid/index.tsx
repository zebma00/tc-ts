import React from "react";

import { Talent } from "../../../data/talents/Classes";
import Cell from "../cell";
import styles from "./grid.module.css";

interface GridProps {
  gridData: Talent[][];
  i: number;
  clickHandler: (
    i: number,
    x: number,
    y: number,
    e: React.MouseEvent<HTMLElement>
  ) => void;
  currentPoints: number;
}

const Grid: React.FC<GridProps> = ({
  i,
  gridData,
  clickHandler,
  currentPoints,
}) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {gridData.map((row, x) => {
          return row.map((cell, y) => {
            if (cell) {
              return (
                <Cell
                  key={`${x}, ${y}`}
                  i={i}
                  x={x}
                  y={y}
                  cellData={cell}
                  clickHandler={clickHandler}
                />
              );
            } else {
              return <div key={`${x}, ${y}`} />;
            }
          });
        })}
      </div>
      <>Current points: {currentPoints}</>
    </div>
  );
};
export default Grid;
