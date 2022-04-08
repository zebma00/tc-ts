import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Talent } from '../data/talents/Classes'
import { ClassSpecType, ClassTalentType, URLParams } from '../types'

const flattenSpec = (specData: ClassSpecType) => {
  return specData.flatMap(row => row)
}

const flattenTalents = (talentData: ClassTalentType | null) => {
  if (!talentData) return []
  return talentData.flatMap(flattenSpec)
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

export const useURLParams = (talentData: ClassTalentType | null) => {
  const { playerClass, talentPoints } = useParams<URLParams>()
  const history = useHistory()
  const flatTalents = flattenTalents(talentData)

  useEffect(() => {
    // loopURLTalents(flatTalents, talentPoints)
  }, [talentData])

  useEffect(() => {
    return () => {}
  }, [talentData])
}
