import React, { useState, useEffect } from 'react'

import TCFooter from '../talent-calculator-footer'
import { ClassTalentType } from '../../../types/'
import druid from '../../../data/talents/druid'
import {
  talentCalcMaker,
  requiresTalentChecker,
  requiredTalentChecker,
  requiredXChecker,
  pointsPerTreeChecker,
  totalPointsChecker,
  pointsUpToXChecker,
  specNameMaker,
} from '../helpers'
import Grid from '../grid/'
import styles from './index.module.css'

interface TalentCalculatorMain {
  selectedClass: string
}

const TalentCalculatorMain: React.FC<TalentCalculatorMain> = ({ selectedClass }) => {
  const [talentData, setTalentData] = useState<ClassTalentType | null>(null)
  const [specNames, setSpecNames] = useState<string[] | null>(null)
  const classData = require(`../../../data/talents/${selectedClass}`)

  useEffect(() => {
    setTalentData(talentCalcMaker(classData.default.specs))
    setSpecNames(specNameMaker(classData.default.specs))
  }, [classData])

  const totalPoints = totalPointsChecker(talentData!)
  const pointsLeft = 51 - totalPointsChecker(talentData!)!

  const clickHandler = (i: number, x: number, y: number, e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const newData = [...talentData!]
    const pointsPerTree = pointsPerTreeChecker(talentData![i])!
    const requiredX = requiredXChecker(talentData![i])
    const upToXPoints = pointsUpToXChecker(talentData![i], requiredX)!
    const requiresTalent = requiresTalentChecker(newData[i], x, y)
    const requiredTalent = requiredTalentChecker(newData[i], x, y)
    const { value, maxValue } = talentData![i][x][y]!

    if (e.type === 'click' && value < maxValue && requiresTalent && x * 5 <= pointsPerTree && pointsLeft > 0) {
      newData[i][x][y]!.increment()
    } else if (e.type === 'contextmenu' && value > 0 && requiredTalent) {
      if (x >= requiredX) {
        newData[i][x][y]!.decrement()
      } else if (x < requiredX && upToXPoints > requiredX * 5) {
        newData[i][x][y]!.decrement()
      }
    }
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
              key={i}
              i={i}
              gridData={gridData}
              pointsLeft={pointsLeft!}
              selectedClass={selectedClass}
              specName={specNames![i]}
              clickHandler={clickHandler}
            />
          )
        })}
        <div className={styles.tcFooter}>
          <TCFooter totalPoints={totalPoints} pointsLeft={pointsLeft} resetPoints={resetPoints} />
        </div>
      </div>
    </>
  )
}

export default TalentCalculatorMain
