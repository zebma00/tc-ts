import React from "react";

import { Talent } from "../../constants/Classes";
import Cell from "../Cell";
import EmptyCell from "../Cell/EmptyCell";
import styles from "./grid.module.css";

interface GridProps {
  gridData: Talent[][];
  clickHandler: (
    x: number,
    y: number,
    e: React.MouseEvent<HTMLElement>
  ) => void;
}

const Grid: React.FC<GridProps> = ({ gridData, clickHandler }) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {gridData.map((row, x) => {
          return row.map((cell, y) => {
            if (cell) {
              return (
                <Cell
                  key={`${x}, ${y}`}
                  cellData={cell}
                  clickHandler={clickHandler}
                />
              );
            } else {
              return <EmptyCell key={`${x}, ${y}`} />;
            }
          });
        })}
      </div>
    </div>
  );
};
export default Grid;
