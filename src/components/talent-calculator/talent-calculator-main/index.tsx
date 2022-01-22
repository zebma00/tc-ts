import React, { useState, useEffect } from 'react'

import TCFooter from '../talent-calculator-footer'
import { ClassTalentType } from '../../../types/'
import { talentCalcMaker, specNameMaker, checkTotalPoints, rightClick, leftClick } from '../helpers'
import Grid from '../grid/'
import styles from './index.module.css'

interface TalentCalculatorMain {
  selectedClass: string
  changedObj: any
}

const TalentCalculatorMain: React.FC<TalentCalculatorMain> = ({ selectedClass, changedObj }) => {
  const [talentData, setTalentData] = useState<ClassTalentType | null>(null)
  const [specNames, setSpecNames] = useState<string[] | null>(null)
  const classData = require(`../../../data/talents/${selectedClass}`)

  useEffect(() => {
    setTalentData(talentCalcMaker(classData.default.specs))
    setSpecNames(specNameMaker(classData.default.specs))
  }, [classData])

  const pointsLeft = 51 - checkTotalPoints(talentData!)!

  const clickHandler = (i: number, x: number, y: number, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const newData = [...talentData!]

    if (e.type === 'click') {
      const canLeftClick = leftClick(newData, i, x, y)
      canLeftClick && newData[i][x][y]!.increment()
    } else if (e.type === 'contextmenu') {
      const canRightClick = rightClick(newData, i, x, y)
      canRightClick && newData[i][x][y]!.decrement()
    }
    setTalentData(newData)
  }

  const resetTree = (i: number) => {
    const newData = [...talentData!]
    newData[i].forEach(row => {
      row.forEach(cell => {
        if (cell) {
          cell.reset()
        }
      })
    })
    setTalentData(newData)
  }

  const resetPoints = () => {
    const newData = [...talentData!]
    newData.forEach(grid => {
      grid.forEach(row => {
        row.forEach(cell => {
          if (cell) {
            cell.reset()
          }
        })
      })
    })
    setTalentData(newData)
  }

  return (
    <>
      <div className={styles.tcContainer}>
        {talentData?.map((gridData: any, i: number) => {
          return (
            <Grid
              changedObj={changedObj}
              key={i}
              i={i}
              gridData={gridData}
              pointsLeft={pointsLeft!}
              selectedClass={selectedClass}
              specName={specNames![i]}
              clickHandler={clickHandler}
              resetTree={resetTree}
            />
          )
        })}
      </div>
      <TCFooter pointsLeft={pointsLeft} resetPoints={resetPoints} selectedClass={selectedClass} talentData={talentData} />
    </>
  )
}

export default TalentCalculatorMain
