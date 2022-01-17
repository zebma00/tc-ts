import React, { useState } from 'react'

import SelectWrapper from './talent-calculator-select'
import TalentCalculatorMain from './talent-calculator-main/'
import styles from './index.module.css'

const TalentCalculator: React.FC = () => {
  const classes = ['druid', 'hunter', 'mage', 'paladin', 'priest', 'rogue', 'shaman', 'warlock', 'warrior']
  const [selectedClass, setSelectedClass] = useState<string>(classes[0])

  const selectClass = (i: number) => {
    setSelectedClass(classes[i])
  }

  return (
    <div className={styles.tcWrapper}>
      <SelectWrapper classes={classes} selectClass={selectClass} selectedClass={selectedClass} />
      <TalentCalculatorMain selectedClass={selectedClass} />
    </div>
  )
}

export default TalentCalculator
