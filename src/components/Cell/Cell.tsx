import React, { useState } from "react";

import { GridDataType } from "../../constants/Types";
import { Talent } from "../../constants/Classes";
import styles from "./cell.module.css";

interface CellProps {
  cellData: Talent;
  clickHandler: (x: number, y: number) => void;
}

const Cell: React.FC<CellProps> = ({ cellData, clickHandler }) => {
  return (
    <div className={styles.cellStyle}>
      <button
        className={styles.cellButtonStyle}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          clickHandler(cellData.x, cellData.y);
        }}
      >
        {cellData.value}
      </button>
    </div>
  );
};

export default Cell;
