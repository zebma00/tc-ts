import React, { useState } from 'react'

import SelectWrapper from './talent-calculator-select'
import TalentCalculatorMain from './talent-calculator-main/'
import styles from './index.module.css'
import ChangedSelect from './changed-select'

const TalentCalculator: React.FC = () => {
  const classes = ['druid', 'hunter', 'mage', 'paladin', 'priest', 'rogue', 'shaman', 'warlock', 'warrior']
  const [selectedClass, setSelectedClass] = useState<string>(classes[0])

  const selectClass = (i: number) => {
    setSelectedClass(classes[i])
  }

  const [displayIsNew, setIsNew] = useState<boolean>(false)
  const [displayIsChanged, setIsChanged] = useState<boolean>(false)
  const [displayIsMoved, setIsMoved] = useState<boolean>(false)

  const toggleIsNew = () => setIsNew(!displayIsNew)
  const toggleIsChanged = () => setIsChanged(!displayIsChanged)
  const toggleIsMoved = () => setIsMoved(!displayIsMoved)

  const displayChanged = {
    displayIsNew,
    displayIsChanged,
    displayIsMoved
  }

  const toggleChangedObj = {
    toggleIsChanged,
    toggleIsNew,
    toggleIsMoved
  }

  return (
    <div className={styles.tcWrapper}>
      <SelectWrapper classes={classes} selectClass={selectClass} selectedClass={selectedClass} />
      <ChangedSelect toggleChangedObj={toggleChangedObj} displayChanged={displayChanged} />
      <TalentCalculatorMain displayChanged={displayChanged} selectedClass={selectedClass} />
    </div>
  )
}

export default TalentCalculator
