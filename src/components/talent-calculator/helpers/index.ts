import { Talent } from '../../../data/talents/Classes'
import { ClassTalentType, ClassSpecType, SpecDataType } from '../../../types/'

// organizing data
export const gridMaker = (spec: (Talent | null)[][]) => {
  const grid: Talent[][] | null[][] = []
  for (let x = 0; x < 7; x++) {
    grid.push([])
    for (let y = 0; y < 4; y++) {
      grid[x][y] = spec[x][y]
    }
  }
  return grid
}

export const talentCalcMaker = (classTalent: SpecDataType[]) => {
  const talentTrees = []
  for (let i = 0; i < 3; i++) {
    talentTrees.push(gridMaker(classTalent[i].talents))
  }
  return talentTrees
}

export const specNameMaker = (classTalent: SpecDataType[]) => {
  const specNames = []
  for (let i = 0; i < 3; i++) {
    specNames.push(classTalent[i].spec)
  }
  return specNames
}

// talent checkers
export const requiresTalentChecker = (talentData: any, x: number, y: number) => {
  if (talentData[x][y].requires[0].x != null && talentData[x][y].requires[0].y != null) {
    const requiresX = talentData[x][y].requires[0].x
    const requiresY = talentData[x][y].requires[0].y
    const requiresTalent = talentData[requiresX][requiresY]

    if (requiresTalent.value === requiresTalent.maxValue) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

export const requiredTalentChecker = (talentData: any, x: number, y: number) => {
  if (talentData[x][y].required[0].x !== null && talentData[x][y].required[0].y !== null) {
    const requiredX = talentData[x][y].required[0].x
    const requiredY = talentData[x][y].required[0].y
    const requiredTalent = talentData[requiredX][requiredY]
    if (requiredTalent.value === 0) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

export const requiredPointsChecker = (pointsPerTree: number, x: number) => {
  return x * 5 <= pointsPerTree ? true : false
}

export const enabledChecker = (talentData: any, x: number, y: number, pointsPerTree: number, pointsLeft: number) => {
  if (talentData[x][y].value === talentData[x][y].maxValue) {
    return 'rgba(255, 209, 0, 0.8)'
  } else if (
    (pointsLeft === 0 && talentData[x][y].value === 0) ||
    !requiredPointsChecker(pointsPerTree!, x) ||
    !requiresTalentChecker(talentData, x, y)
  ) {
    return null
  } else {
    return 'rgba(64, 191, 64, 0.8)'
  }
}

export const pointsPerRowChecker = (specRow: (Talent | null)[]) => {
  return specRow
    .filter(talent => {
      return !!talent
    })
    .map(talent => {
      return talent?.value
    })
    .reduce((a, b) => {
      return a! + b!
    })
}

export const pointsPerTreeChecker = (specData: ClassSpecType) => {
  return [...specData!]
    .map(row => {
      return pointsPerRowChecker(row)!
    })
    .reduce((a, b) => {
      return a! + b!
    })
}

export const totalPointsChecker = (talentData: ClassTalentType) => {
  const totalPointsArray: number[] = []
  if (!!talentData) {
    for (let i = 0; i < 3; i++) {
      totalPointsArray.push(pointsPerTreeChecker(talentData[i]))
    }
  }
  const totalPoints = totalPointsArray.reduce((a, b) => a! + b!)
  return totalPoints
}

export const pointsUpToXChecker = (specData: ClassSpecType, requiredX: number) => {
  const upToXPoints = []
  for (let i = 0; i < requiredX; i++) {
    upToXPoints.push(pointsPerRowChecker(specData[i]))
  }
  if (upToXPoints.length) {
    return upToXPoints.reduce((a, b) => {
      return a! + b!
    })
  }
  return 0
}

export const requiredXChecker = (specData: ClassSpecType) => {
  const requiredX = [...specData!]
    .map(row => {
      return row.some(talent => {
        return talent && talent.value
      })
    })
    .lastIndexOf(true)

  return requiredX
}

export const checkMaxedValue = (talent: Talent) => {
  const isMaxedValue = talent.value === talent.maxValue
  return isMaxedValue
}

export const leftClick = (talentData: ClassTalentType, i: number, x: number, y: number) => {
  const pointsLeft = totalPointsChecker(talentData)
  const enoughPointsLeft = pointsLeft <= 51

  // const allRequiredTalents = talentData[i][x][y]?.required
  // const temp = allRequiredTalents.map(tCoordinates: {x: number, y:number}) => {
  // const talentX = tCoordinates.x
  // const talentY = tCoordinates.y
  // return checkMaxedValue(talentData[i][talentX][talentY])
  // }

  // if (...) talentData[i][x][y]?.increment

  return true
}

export const rightClick = (talentData: ClassTalentType, i: number, x: number, y: number) => {
  const pointsLeft = totalPointsChecker(talentData)
  const enoughPointsLeft = pointsLeft > 0

  // const allRequiringTalents = talentData[i][x][y]?.requiring

  // return {booleans.any}
  return true
}

export const capitalizer = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).replace(/-/g, ' ')
}
