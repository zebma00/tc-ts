import { Talent } from '../data/talents/Classes'

export type ClassTalentType = (Talent | null)[][][]

export type ClassSpecType = (Talent | null)[][]

export type SpecDataType = {
  spec: string
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
