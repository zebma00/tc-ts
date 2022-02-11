import { Talent } from '../../../data/talents/Classes'
import { ClassTalentType, ClassSpecType, SpecDataType } from '../../../types/'

// organizing & displaying data
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

export const specMaker = (classTalent: SpecDataType[]) => {
	const specNames: string[] = []
	const specIcons: string[] = []
	for (let i = 0; i < 3; i++) {
		specNames.push(classTalent[i].spec)
		specIcons.push(classTalent[i].icon)
	}
	return { specNames, specIcons }
}

// color checker

export const enabledChecker = (
	specData: ClassSpecType,
	x: number,
	y: number,
	pointsPerTree: number,
	pointsLeft: number
) => {
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

// Talent checkers

export const checkPointsPerTree = (specData: ClassSpecType) => {
	return [...specData!]
		.map((row) => {
			return checkPointsPerRow(row)!
		})
		.reduce((a, b) => {
			return a! + b!
		})
}

export const checkTotalPoints = (talentData: ClassTalentType) => {
	const totalPointsArray: number[] = [0, 0]
	if (!!talentData) {
		for (let i = 0; i < 3; i++) {
			totalPointsArray.push(checkPointsPerTree(talentData[i]))
		}
	}
	const totalPoints = totalPointsArray.reduce((a, b) => a! + b!)
	return totalPoints
}

export const checkPointsPerRow = (specRow: (Talent | null)[]) => {
	const pts =
		specRow &&
		specRow!
			.filter((talent) => {
				return !!talent
			})
			.map((talent) => {
				return talent?.value
			})
			.reduce((a, b) => {
				return a! + b!
			})

	if (!!pts && pts! >= 0) {
		return pts
	} else {
		return 0
	}
}

export const checkAnyValue = (talent: Talent | null) => {
	return talent?.value! > 0
}

export const checkMaxedValue = (talent: Talent | null) => {
	return talent?.value === talent?.maxValue
}

export const checkZeroValue = (talent: Talent | null) => {
	return talent?.value === 0
}

export const getConnectedTalent = (specData: ClassSpecType | null, connectedX: number, connectedY: number) => {
	if (connectedX !== null && connectedY !== null) return specData![connectedX][connectedY]
}

export const checkRowHasPoints = (specRow: (Talent | null)[]) => {
	const hasPoints: any[] = []

	specRow.forEach((talent) => {
		if (!!talent) return hasPoints.push(checkAnyValue(talent))
	})

	const rowHasPoints = hasPoints.some((value) => {
		return value === true
	})

	return rowHasPoints
}

export const getRowsBelowX = (specData: ClassSpecType | null, rowWithPts: number | undefined) => {
	return specData?.filter((_, index) => index < rowWithPts!)
}

export const checkEnoughPointsRow = (specData: ClassSpecType | null, x: number, y: number) => {
	const firstRowWithPts = specData?.findIndex((row, rowIndex) => {
		return checkRowHasPoints(row) && rowIndex > x
	})

	if (firstRowWithPts === -1) {
		return true
	}

	const rowsBelowX = getRowsBelowX(specData, firstRowWithPts)?.filter((row) => !!row)

	const pointsRows = rowsBelowX?.map((row) => checkPointsPerRow(row!))
	const sumPoints = pointsRows?.reduce((a, b) => a! + b!)

	if (sumPoints! > firstRowWithPts! * 5) {
		return true
	} else {
		return false
	}
}

export const checkEnoughPointsForRightClick = (specData: ClassSpecType, x: number) => {
	const lastRowWithPts = specData?.map((row) => checkRowHasPoints(row)).lastIndexOf(true)

	const ptsInLastRow = checkPointsPerRow(specData[lastRowWithPts])

	const pointsInTree = checkPointsPerTree(specData)

	if (lastRowWithPts === x) {
		return true
	}

	if (pointsInTree - ptsInLastRow! >= lastRowWithPts * 5 + 1) {
		return true
	} else {
		return false
	}
}

export const checkRequiredTalentsAreMaxed = (specData: ClassSpecType | null, x: number, y: number) => {
	const allRequiredTalents = specData![x][y]?.required.map((reqTalent) => {
		return getConnectedTalent(specData, reqTalent.x!, reqTalent.y!)
	})

	const isRequiredMaxed: any[] = []

	allRequiredTalents?.forEach((talent) => {
		if (!!talent) return isRequiredMaxed.push(checkMaxedValue(talent))
	})

	const requiredTalentsAreMaxed = isRequiredMaxed!.every((talent) => talent === true)

	return requiredTalentsAreMaxed
}

export const checkRequiringTalentsAreZero = (specData: ClassSpecType | null, x: number, y: number) => {
	const allRequiringTalents = specData![x][y]?.requiring.map((reqTalent) => {
		return getConnectedTalent(specData, reqTalent.x!, reqTalent.y!)
	})

	const isRequiringZero: any[] = []

	allRequiringTalents?.forEach((talent) => {
		if (!!talent) return isRequiringZero.push(checkZeroValue(talent))
	})

	const requiringTalentsAreZero = isRequiringZero!.every((talent) => talent === true)

	return requiringTalentsAreZero
}

// click boys

export const leftClick = (talentData: ClassTalentType, i: number, x: number, y: number) => {
	const pointsLeft = checkTotalPoints(talentData)
	const enoughPointsLeft = pointsLeft < 51

	const isMaxedValue = checkMaxedValue(talentData[i][x][y])

	const enoughPointsInTree = checkPointsPerTree(talentData![i]) >= x * 5

	const requiredTalentsAreMaxed = checkRequiredTalentsAreMaxed(talentData[i], x, y)

	if (enoughPointsLeft && !isMaxedValue && enoughPointsInTree && requiredTalentsAreMaxed) {
		return true
	} else {
		return false
	}
}

export const rightClick = (talentData: ClassTalentType, i: number, x: number, y: number) => {
	const pointsLeft = checkTotalPoints(talentData!)
	const enoughPointsLeft = pointsLeft > 0

	if (!enoughPointsLeft) {
		return false
	}

	const isZeroValue = checkZeroValue(talentData[i][x][y])

	const enoughPointsRows = checkEnoughPointsRow(talentData[i], x, y)

	const requiringTalentsAreZero = checkRequiringTalentsAreZero(talentData[i], x, y)

	const enoughPtsForRightCLick = checkEnoughPointsForRightClick(talentData[i], x)

	if (enoughPointsLeft && !isZeroValue && requiringTalentsAreZero && enoughPointsRows && enoughPtsForRightCLick) {
		return true
	} else {
		return false
	}
}

// misc

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
