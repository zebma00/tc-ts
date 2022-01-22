import React from "react"

import styles from './changed-select.module.css'

const ChangedSelectSingle:React.FC<{text:string, onClick:()=>void}> = ({text, onClick}) => {
    return <div className={styles.changedSelectSingle} onClick={onClick}>{text}</div>
}

const ChangedSelect:React.FC<any> = ({toggleChangedObj}) => {
    const {toggleIsNew, toggleIsChanged, toggleIsMoved} = toggleChangedObj
    
    return <div className={styles.changedSelect}>
        <ChangedSelectSingle onClick={toggleIsNew} text='New' />
        <ChangedSelectSingle onClick={toggleIsChanged} text='Changed' />
        <ChangedSelectSingle onClick={toggleIsMoved} text='Moved' />
    </div>

}

export default ChangedSelect