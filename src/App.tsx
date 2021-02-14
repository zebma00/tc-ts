import React from "react";

import TalentCalculator from "./components/TalentCalculator";
import Menu from "./components/Menu";
import styles from "./index.module.css";

function App() {
  return (
    <div id={styles.app}>
      <TalentCalculator />
      <Menu />
    </div>
  );
}

export default App;
