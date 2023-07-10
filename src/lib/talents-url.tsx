import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Talent } from '../data/talents/Classes'
import { ClassSpecType, ClassTalentType, URLParams } from '../types'
import { classes } from '../components/talent-calculator'

const flattenSpec = (specData: ClassSpecType) => {
  return specData.flatMap(row => row)
}

export const flattenTalents = (talentData: ClassTalentType | null) => {
  if (!talentData) return []
  return talentData.flatMap(flattenSpec)
}

export const getFlattenedTalentValues = (talentData: ClassTalentType | null) => {
  const flattenedTalents = flattenTalents(talentData)
  return flattenedTalents.map(talent => talent?.value).filter(talent => !isNaN(talent!))
}

const getTruthyTalents = (talentData: ClassTalentType | null) => {
  if (!talentData) return []
  return flattenTalents(talentData).filter(talent => talent)
}

const loopURLTalents = (flatTalents: (Talent | null)[], talentsFromUrl: string) => {
  let stringIndex: number = 0

  for (let i = 0; i < flatTalents.length; i++) {
    if (!!flatTalents[i]) {
      flatTalents[i]?.setValue(parseInt(talentsFromUrl[stringIndex]))
      stringIndex++
    }
  }
}

// http://localhost:3000/tc-ts#/tc/druid/0140003000000000050023011000000000055003115010000

const loopTalentsFromUrl = (talentData: ClassTalentType | null, talentPoints: string) => {
  let stringIndex: number = 0
  const newTalents = [...talentData!]

  newTalents.forEach(spec => {
    spec.forEach(row => {
      row.forEach(talent => {
        if (!!talent) {
          talent.setValue(parseInt(talentPoints[stringIndex]))
          stringIndex++
        }
      })
    })
  })

  return newTalents
}

export const useURLParams = (talentData: ClassTalentType | null, setTalentData: (value: React.SetStateAction<ClassTalentType | null>) => void) => {
  const { playerClass, talentPoints } = useParams<URLParams>()

  useEffect(() => {
    if (!talentData) return

    const flatTalents = flattenTalents(talentData).filter(talent => talent)
    if (!flatTalents || !talentPoints || flatTalents.length !== talentPoints.length) return
    if (!classes.includes(playerClass)) return

    const newTalents = loopTalentsFromUrl(talentData, talentPoints)
    console.log('N', newTalents)
    // setTalentData(newTalents)
  }, [talentData])
}
