import { ClassSpecType } from '../types/'
import { checkMaxedValue, checkZeroValue, checkRequiredTalentsAreMaxed } from './handle-talents'

// color checker

export const enabledChecker = (specData: ClassSpecType, x: number, y: number, pointsPerTree: number, pointsLeft: number) => {
  const isMaxValue = checkMaxedValue(specData[x][y])
  const isZeroValue = checkZeroValue(specData[x][y])
  const enoughPointsInTree = x * 5 <= pointsPerTree
  const noPointsLeft = pointsLeft === 0
  const requiredTalentsAreMaxed = checkRequiredTalentsAreMaxed(specData, x, y)

  if (isMaxValue) {
    return 'rgba(255, 209, 0, 0.8)'
  } else if ((noPointsLeft && isZeroValue) || !enoughPointsInTree || !requiredTalentsAreMaxed) {
    return null
  } else {
    return 'rgba(64, 191, 64, 0.8)'
  }
}

export const capitalizer = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).replace(/-/g, ' ')
}

export const getClassColor = (selectedClass: string) => {
  const classColorObj: any = {
    druid: '#ff7c0a',
    hunter: '#aad372',
    mage: '#68ccef',
    paladin: '#f48cba',
    priest: '#fff',
    rogue: '#fff468',
    shaman: '#2359ff',
    warlock: '#9382c9',
    warrior: '#c69b6d',
  }

  return classColorObj[selectedClass]
}
