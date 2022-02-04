import React from 'react'

import { Talent } from '../../../data/talents/Classes'
import { enabledChecker, checkPointsPerTree, capitalizer } from '../helpers/'
import Cell from '../cell'
import styles from './grid.module.css'

interface GridProps {
  gridData: Talent[][]
  i: number
  pointsLeft: number
  selectedClass: string
  specName: string
  clickHandler: (i: number, x: number, y: number, e: React.MouseEvent<HTMLElement>) => void
  resetTree: (i: number) => void
  displayChanged: {
    displayIsNew: boolean
    displayIsChanged: boolean
    displayIsMoved: boolean
  }
}

const Grid: React.FC<GridProps> = ({ gridData, i, pointsLeft, selectedClass, specName, clickHandler, resetTree, displayChanged }) => {
  const currentPoints = checkPointsPerTree(gridData)

  return (
    <div className={styles.tree}>
      <div className={styles.treeHeader}>
        <div className={styles.treeHeaderText}>
          {capitalizer(specName)} ({currentPoints})
        </div>
        <div onClick={() => resetTree(i)} className={styles.reset}>
          &#x2715;
        </div>
      </div>
      <div
        style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/background/${selectedClass}/${specName}.jpg")` }}
        className={styles.grid}>
        {gridData.map((row, x) => {
          return row.map((cell, y) => {
            if (cell) {
              const color = enabledChecker(gridData, x, y, currentPoints, pointsLeft)
              return (
                <Cell
                  key={`${x}, ${y}`}
                  i={i}
                  x={x}
                  y={y}
                  cellData={cell}
                  color={color}
                  clickHandler={clickHandler}
                  displayChanged={displayChanged}
                />
              )
            } else {
              return <div key={`${x}, ${y}`} />
            }
          })
        })}
      </div>
    </div>
  )
}
export default Grid
