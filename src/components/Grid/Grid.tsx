import React, { useState, useEffect } from "react";

import styles from "./grid.module.css";
import { GridDataType } from "../../constants/Types";
import { Talent } from "../../constants/Classes";
import { gridMaker } from "../helpers/gridMaker";
import Cell from "../Cell/Cell";

interface GridProps {
  gridData: Talent[][];
  clickHandler: (x: number, y: number) => void;
}

const Grid: React.FC<GridProps> = ({ gridData, clickHandler }) => {
  return (
    <div className={styles.grid}>
      {gridData.map((row, x) => {
        return row.map((cell, y) => {
          return (
            <Cell
              key={`${x}, ${y}`}
              cellData={cell}
              clickHandler={clickHandler}
            />
          );
        });
      })}
    </div>
  );
  // Cell per talent
};
export default Grid;
