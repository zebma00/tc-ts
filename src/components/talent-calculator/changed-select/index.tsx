import React from 'react'

import styles from './changed-select.module.css'

<<<<<<< HEAD
const ChangedSelectSingle: React.FC<{ display: boolean; text: string; onClick: () => void; cn: string }> = ({ display, text, onClick, cn }) => {
  const styleObjActive: { [key: string]: string } = {
    red: styles.changedSelectSingleRedActive,
    blue: styles.changedSelectSingleBlueActive,
    yellow: styles.changedSelectSingleYellowActive,
  }

  const styleObjInactive: { [key: string]: string } = {
    red: styles.changedSelectSingleRedInactive,
    blue: styles.changedSelectSingleBlueInactive,
    yellow: styles.changedSelectSingleYellowInactive,
  }

  const colorCn: string = !!display ? styleObjActive[cn] : styleObjInactive[cn]

  return (
    <p className={`${colorCn} ${styles.changedSelectSingle}`} onClick={onClick}>
      {text}
    </p>
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
=======
const ChangedSelectSingle: React.FC<{ display: boolean; text: string; onClick: () => void }> = ({
	display,
	text,
	onClick,
}) => {
	let className = ''
	if (display && text === 'New') {
		className = styles.changedSelectSingleNew
	} else if (display && text === 'Changed') {
		className = styles.changedSelectSingleChanged
	} else if (display && text === 'Moved') {
		className = styles.changedSelectSingleMoved
	} else {
		className = styles.changedSelectSingle
	}

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

	return (
		<div className={styles.changedSelect}>
			<ChangedSelectSingle display={displayIsNew} onClick={toggleIsNew} text='New' />
			<ChangedSelectSingle display={displayIsChanged} onClick={toggleIsChanged} text='Changed' />
			<ChangedSelectSingle display={displayIsMoved} onClick={toggleIsMoved} text='Moved' />
		</div>
	)
>>>>>>> 1ddb4f1 (patch notes)
}

export default ChangedSelect
