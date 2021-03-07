import React, { useState } from "react";

import { Talent } from "../../../data/talents/Classes";
import Tooltip from "./tooltip";
import styles from "./cell.module.css";

interface CellProps {
  cellData: Talent;
  i: number;
  x: number;
  y: number;
  color: string;
  clickHandler: (
    i: number,
    x: number,
    y: number,
    e: React.MouseEvent<HTMLElement>
  ) => void;
}

const Cell: React.FC<CellProps> = ({
  cellData,
  i,
  x,
  y,
  color,
  clickHandler,
}) => {
  const [showTooltip, set_showTooltip] = useState<boolean>(false);

  return (
    <div className={styles.cellStyle}>
      <button
        className={styles.cellButtonStyle}
        style={{ backgroundColor: color }}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          clickHandler(i, x, y, e);
        }}
        onContextMenu={(e: React.MouseEvent<HTMLElement>) => {
          clickHandler(i, x, y, e);
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
