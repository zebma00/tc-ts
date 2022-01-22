import React from "react"

import useChanged from "../../../useChanged"
import styles from './changed-select.module.css'

const ChangedSelectSingle:React.FC<{text:string, onClick:()=>void}> = ({text, onClick}) => {
    return <div className={styles.changedSelectSingle} onClick={onClick}>{text}</div>
}

const ChangedSelect = () => {
    const {toggleIsNew, toggleIsChanged, toggleIsMoved} = useChanged()
    
    return <div className={styles.changedSelect}>
        <ChangedSelectSingle onClick={toggleIsNew} text='New' />
        <ChangedSelectSingle onClick={toggleIsChanged} text='Changed' />
        <ChangedSelectSingle onClick={toggleIsMoved} text='Moved' />
    </div>

}

export default ChangedSelect