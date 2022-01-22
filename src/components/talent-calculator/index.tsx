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

  const [isNew, setIsNew] = useState<boolean>(false)
  const [isChanged, setIsChanged] = useState<boolean>(false)
  const [isMoved, setIsMoved] = useState<boolean>(false)

  const toggleIsNew = () => setIsNew(!isNew)
  const toggleIsChanged = () => setIsChanged(!isChanged)
  const toggleIsMoved = () => setIsMoved(!isMoved)

  const changedObj = {
    isNew,
    isChanged,
    isMoved
  }

  const toggleChangedObj ={ 
    toggleIsChanged,
    toggleIsNew,
    toggleIsMoved
  }

  return (
    <div className={styles.tcWrapper}>
      <SelectWrapper classes={classes} selectClass={selectClass} selectedClass={selectedClass} />
      <ChangedSelect toggleChangedObj={toggleChangedObj}/>
      <TalentCalculatorMain changedObj={changedObj} selectedClass={selectedClass} />
    </div>
  )
}

export default TalentCalculator
