import React from 'react'

import { capitalizer, checkPointsPerTree, getClassColor } from '../helpers'
import styles from './index.module.css'

interface TCFooterProps {
  pointsLeft: number
  resetPoints: () => void
  selectedClass: string
  talentData: any
}

const TCFooter: React.FC<TCFooterProps> = ({ pointsLeft, resetPoints, selectedClass, talentData }) => {
  const pointsPerTree = talentData && talentData.map((spec: any) => checkPointsPerTree(spec))
  const renderPoints = talentData ? `(${pointsPerTree[0]}/${pointsPerTree[1]}/${pointsPerTree[2]})` : '(0/0/0)'
  const classColor = getClassColor(selectedClass)

  return (
    <div className={styles.tcFooter}>
      <b>
        <span style={{ color: classColor }}>{capitalizer(selectedClass)}</span> {renderPoints}
      </b>
      <span onClick={resetPoints} className={styles.reset}>
        &#x2715;
      </span>
      <div>Points left: {pointsLeft}</div>
    </div>
  )
}

export default TCFooter
