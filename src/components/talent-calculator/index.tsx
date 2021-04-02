import React, { useState } from 'react';
import TalentCalculatorMain from './talent-calculator-main/';
import styles from './index.module.css';

const TalentCalculator: React.FC = () => {
  const classes = ['druid', 'hunter', 'mage', 'paladin', 'priest', 'rogue', 'shaman', 'warlock', 'warrior'];
  const [selectedClass, setSelectedClass] = useState<string>(classes[0]);

  const selectClass = (i: number) => {
    setSelectedClass(classes[i]);
  };

  return (
    <div className={styles.tcWrapper}>
      <div className={styles.selectWrapper}>
        {classes.map((singleClass: string, i: number) => {
          return (
            <div
              key={i}
              className={styles.iconWrapper}
              style={{
                border: i === classes.indexOf(selectedClass) ? '4px solid rgba(255, 209, 0, 0.8)' : '4px solid transparent',
                filter: i === classes.indexOf(selectedClass) ? 'none' : 'brightness(50%)',
              }}
            >
              <div className={styles.iconBorder} style={{ backgroundImage: "url('/img/icons/border.png')" }} />
              <div
                className={styles.iconClass}
                style={{
                  background: `url("/img/icons/${singleClass}.jpg") 0 0 no-repeat`,
                }}
              >
                <button
                  className={styles.selectButton}
                  onClick={() => {
                    selectClass(i);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <TalentCalculatorMain selectedClass={selectedClass} />
    </div>
  );
};

export default TalentCalculator;
