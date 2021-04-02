import React, { useState } from 'react';

import { Talent } from '../../../data/talents/Classes';
import Tooltip from './tooltip';
import styles from './cell.module.css';

interface CellProps {
  cellData: Talent;
  // Talent | ActiveTalent
  i: number;
  x: number;
  y: number;
  color: string | null;
  clickHandler: (i: number, x: number, y: number, e: React.MouseEvent<HTMLElement>) => void;
}

const Cell: React.FC<CellProps> = ({ cellData, i, x, y, color, clickHandler }) => {
  const [showTooltip, set_showTooltip] = useState<boolean>(false);
  const { value, maxValue } = cellData;

  return (
    <div className={styles.cellWrapper}>
      <div className={styles.cellHighlight} style={{ backgroundImage: "url('/img/icons/border.png')" }} />
      <div
        style={{
          background: `url("/img/icons/${cellData.icon}.jpg") 0 0 no-repeat`,
          border: color ? `2px solid ${color}` : 'none',
          filter: !color ? 'grayscale(100%)' : 'none',
        }}
        className={styles.cellStyle}
      >
        <button
          className={styles.cellButtonStyle}
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
          <div className={styles.cellPointsStyle} style={{ color: color ? 'white' : '#787878' }}>
            {`${value}/${maxValue}`}
          </div>
        </button>
        {showTooltip && <Tooltip value={cellData.value} description={cellData.description} />}
      </div>
    </div>
  );
};

export default Cell;
