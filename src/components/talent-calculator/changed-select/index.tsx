import React from 'react'

import styles from './changed-select.module.css'

const ChangedSelectSingle: React.FC<{ display: boolean; text: string; onClick: () => void; cn: string }> = ({ display, text, onClick, cn }) => {
  const styleObj: { [key: string]: string } = {
    red: styles.changedSelectSingleRed,
    blue: styles.changedSelectSingleBlue,
    yellow: styles.changedSelectSingleYellow,
  }

  const className: string = !!display ? styleObj[cn] : styles.changedSelectSingle

  return (
    <div className={className} onClick={onClick}>
      {text}
    </div>
  )
}

const ChangedSelect: React.FC<{
  toggleChangedObj: {
    toggleIsNew: () => void
    toggleIsChanged: () => void
    toggleIsMoved: () => void
  }
  displayChanged: {
    displayIsNew: boolean
    displayIsChanged: boolean
    displayIsMoved: boolean
  }
}> = ({ toggleChangedObj, displayChanged }) => {
  const { toggleIsNew, toggleIsChanged, toggleIsMoved } = toggleChangedObj
  const { displayIsNew, displayIsChanged, displayIsMoved } = displayChanged

  // const toggleNewAndChanged = () => {
  //   toggleIsChanged()
  //   toggleIsNew()
  // }

  // const displayNewAndChanged = displayIsNew || displayIsChanged

  return (
    <div className={styles.changedSelect}>
      <ChangedSelectSingle display={displayIsNew} onClick={toggleIsNew} text='New' cn='red' />
      <ChangedSelectSingle display={displayIsChanged} onClick={toggleIsChanged} text='Changed' cn='yellow' />
      <ChangedSelectSingle display={displayIsMoved} onClick={toggleIsMoved} text='Moved' cn='blue' />
    </div>
  )
}

export default ChangedSelect
