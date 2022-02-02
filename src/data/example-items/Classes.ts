import { Stats } from '../../types'

export class Item {
<<<<<<< HEAD
	name: string
	img: string
	quality: 'epic' | 'rare'
	slot: string
	itemType?: string | null
	damage: string | null
	speed: string | null
	dps: string | null
	stats: Stats | null
	description: string[] | null
	playerClass: 'Druid' | 'Hunter' | 'Mage' | 'Paladin' | 'Priest' | 'Rogue' | 'Shaman' | 'Warlock' | 'Warrior' | null
	levelRequired: number | null
	constructor(
		name: string,
		img: string,
		quality: 'epic' | 'rare',
		slot: string,
		itemType?: string | null,
		damage?: string | null,
		speed?: string | null,
		dps?: string | null,
		stats?: Stats | null,
		description?: string[] | null,
		playerClass?:
			| 'Druid'
			| 'Hunter'
			| 'Mage'
			| 'Paladin'
			| 'Priest'
			| 'Rogue'
			| 'Shaman'
			| 'Warlock'
			| 'Warrior'
			| null,
		levelRequired?: number | null
	) {
		this.name = name
		this.img = img
		this.quality = quality
		this.slot = slot
		this.itemType = itemType ? itemType : null
		this.damage = damage ? damage : null
		this.speed = speed ? speed : null
		this.dps = dps ? dps : null
		this.stats = stats ? stats : null
		this.description = description ? description : null
		this.playerClass = playerClass ? playerClass : null
		this.levelRequired = levelRequired ?? null
	}
=======
  name: string
  quality: 'epic' | 'rare'
  slot: string
  itemType: string
  damage?: string | null
  speed?: string | null
  dps?: string | null
  stats?: Stats | null
  description?: string | null
  constructor(
    name: string,
    quality: 'epic' | 'rare',
    slot: string,
    itemType: string,
    damage?: string | null,
    speed?: string | null,
    dps?: string | null,
    stats?: Stats | null,
    description?: string | null
  ) {
    this.name = name
    this.quality = quality
    this.slot = slot
    this.itemType = itemType
    this.damage = damage ? damage : null
    this.speed = speed ? speed : null
    this.dps = dps ? dps : null
    this.stats = stats ? stats : null
    this.description = description ? description : null
  }
>>>>>>> 8b33b65 (update talents + item class)
}
