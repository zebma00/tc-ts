import React, { useState } from "react";

import { GridDataType } from "../../constants/Types";
import { Talent } from "../../constants/Classes";
import Tooltip from "./Tooltip";
import styles from "./cell.module.css";

interface CellProps {
  cellData: Talent;
  clickHandler: (
    x: number,
    y: number,
    e: React.MouseEvent<HTMLElement>
  ) => void;
}

const Cell: React.FC<CellProps> = ({ cellData, clickHandler }) => {
  const [showTooltip, set_showTooltip] = useState<boolean>(false);

  return (
    <div className={styles.cellStyle}>
      <button
        className={styles.cellButtonStyle}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          clickHandler(cellData.x, cellData.y, e);
        }}
        onContextMenu={(e: React.MouseEvent<HTMLElement>) => {
          clickHandler(cellData.x, cellData.y, e);
        }}
        onMouseEnter={() => {
          set_showTooltip(true);
        }}
        onMouseLeave={() => {
          set_showTooltip(false);
        }}
      >
        {cellData.value}
      </button>
      {showTooltip && (
        <Tooltip value={cellData.value} description={cellData.description} />
      )}
    </div>
  );
};

export default Cell;
