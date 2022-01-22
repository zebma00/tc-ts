import React from 'react'

import useChanged from '../../../useChanged'
import styles from './cell.module.css'

const ChangedIcon:React.FC<{isActive: boolean}> = ({isActive}) => {
    return <div className={styles.changedIcon} style={{ backgroundColor: isActive ? 'transparent' : '' }}/>
}

const ChangedBar: React.FC<any> = ({changedObj}) => {
    const { isNew, isChanged, isMoved } = changedObj

    return <div className={styles.changedBar}><ChangedIcon isActive={isNew}/><ChangedIcon isActive={isChanged}/><ChangedIcon isActive={isMoved}/></div>
}

export default ChangedBar