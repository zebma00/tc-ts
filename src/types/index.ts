import { Talent } from '../data/talents/Classes'

export type ClassTalentType = (Talent | null)[][][]

export type ClassSpecType = (Talent | null)[][]

export type SpecDataType = {
	spec: string
<<<<<<< HEAD
	icon: string
=======
>>>>>>> 1ddb4f1 (patch notes)
	talents: (Talent | null)[][]
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
