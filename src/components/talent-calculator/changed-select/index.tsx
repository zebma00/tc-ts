import React from 'react'

import styles from './changed-select.module.css'

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
}

export default ChangedSelect
