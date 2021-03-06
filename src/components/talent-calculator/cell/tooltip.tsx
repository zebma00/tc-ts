import React from "react";

import styles from "./cell.module.css";

interface TooltipProps {
  value: number;
  description: string[];
}

const Tooltip: React.FC<TooltipProps> = ({ value, description }) => {
  return <div className={styles.tooltipStyle}>{description[0]}</div>;
};

export default Tooltip;
