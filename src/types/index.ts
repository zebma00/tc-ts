import { Talent } from '../data/talents/Classes'

export type ClassTalentType = (Talent | null)[][][]

export type ClassSpecType = (Talent | null)[][]

export type SpecDataType = {
<<<<<<< HEAD
	spec: string
<<<<<<< HEAD
	icon: string
=======
>>>>>>> 1ddb4f1 (patch notes)
	talents: (Talent | null)[][]
=======
  spec: string
  talents: (Talent | null)[][]
>>>>>>> 8b33b65 (update talents + item class)
}

export type GridDataType = Talent[][]

export type RequiredType = {
  x: number | null
  y: number | null
}[]

export type PatchNotesContent = {
  title: string
  content: string
}

export type Stats = [{ stamina?: number; intellect?: number; strength?: number; agility?: number; spirit?: number }]

export type Item = {
  name: string
  quality: 'epic' | 'rare'
  slot: string
  itemType: string
  damage?: string | null
  speed?: string | null
  dps?: string | null
  stats?: Stats | null
  description?: string | null
}
<<<<<<< HEAD

export type Stats = {
	armor: number
	stamina: number
	intellect: number
	strength: number
	agility: number
	spirit: number
}

export type URLParams = { playerClass: string; talentPoints: string }
=======
>>>>>>> 1ddb4f1 (patch notes)
