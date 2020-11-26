import React, { useState, useEffect } from "react";

import { druid } from "../../constants/druid";
import { Talent } from "../../constants/Classes";
import { GridDataType } from "../../constants/Types";
import { gridMaker } from "../helpers/gridMaker";
import Grid from "../Grid/Grid";

const TalentCalculator: React.FC = () => {
  const [gridData, set_gridData] = useState<Talent[][] | []>([]);

  useEffect(() => {
    set_gridData(gridMaker());
  }, []);

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newData = [...gridData];
    newData[x][y].increment();
    set_gridData(newData);
  };

  console.log(gridData);
  return <Grid gridData={gridData} clickHandler={clickHandler} />;
  // Grid per spec
};

export default TalentCalculator;
