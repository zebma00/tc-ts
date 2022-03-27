import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Talent } from '../data/talents/Classes'
import { ClassSpecType, ClassTalentType, URLParams } from '../types'

const flattenSpec = (specData: ClassSpecType) => {
  return specData.flatMap(row => row)
}

const flattenTalents = (talentData: ClassTalentType) => {
  return talentData.flatMap(flattenSpec)
}

const getTruthyTalents = (talentData: ClassTalentType | null) => {
  if (!talentData) return []
  return flattenTalents(talentData).filter(talent => talent)
}

const loopURLTalents = (flatTalents: (Talent | null)[], talentsFromUrl: string) => {
  console.log('L', flatTalents.length, talentsFromUrl.length)
  if (flatTalents.length !== talentsFromUrl.length) return 0

  for (let i = 0; i < flatTalents.length; i++) {
    flatTalents[i]?.setValue(parseInt(talentsFromUrl[i]))
    console.log('???')
  }
}

// http://localhost:3000/tc-ts#/tc/druid/1111111111111111111111111111111111111111111111111

export const useURLParams = (talentData: ClassTalentType | null) => {
  console.log('DATA', talentData)
  const { playerClass, talentPoints } = useParams<URLParams>()
  const history = useHistory()
  const flatTalents = getTruthyTalents(talentData)

  useEffect(() => {
    loopURLTalents(flatTalents, talentPoints)
  }, [])

  useEffect(() => {
    return () => {}
  }, [talentData])
}
