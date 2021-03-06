import React from "react";

import TalentCalculator from "./components/talent-calculator";
import Menu from "./components/talent-calculator/menu";
import styles from "./index.module.css";

const App = () => {
  return (
    <div id={styles.app}>
      <TalentCalculator />
      <Menu />
    </div>
  );
};

export default App;
