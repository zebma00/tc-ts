import React, { useState, useEffect } from "react";

import { balance, druid } from "../../constants/druid";
import { Talent } from "../../constants/Classes";
import { GridDataType } from "../../constants/Types";
import { gridMaker } from "../helpers/gridMaker";
import Grid from "../Grid/";

const TalentCalculator: React.FC = () => {
  const [gridData, set_gridData] = useState<any>([]);

  useEffect(() => {
    set_gridData(gridMaker());
  }, []);

  const clickHandler = (
    x: number,
    y: number,
    e: React.MouseEvent<HTMLElement>
  ) => {
    const newData = [...gridData];
    if (e.type === "click") {
      newData[x][y].increment();
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      newData[x][y].decrement();
    }
    set_gridData(newData);
  };

  return <Grid gridData={gridData} clickHandler={clickHandler} />;
  // Grid per spec
};

export default TalentCalculator;
