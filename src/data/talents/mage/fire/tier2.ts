import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Ignite', 'spell_fire_incinerate', ['Your critical strikes from Fire damage spells cause the target to burn for an additional ', "% of your spell's damage for 4 sec."], 5, [[8, 16, 24, 32, 40]]),
  new Talent('Flame Throwing', 'spell_fire_flare', ['Increases the range of your Fire spells by ', ' yards'], 2, [[3, 6]]),
  new Talent('Improved Fire Blast', 'spell_fire_fireball', ['Reduces the cooldown of your Fire Blast by ', ' sec.'], 3, [[0.5, 1, 1.5]]),
  new Talent('Burning Determination', 'spell_fire_totemofwrath', ['Increases the damage of your next Fire damage spell by ', '% after not casting a Fire damage spell for 6 sec.'], 2, [[15, 30]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]
export default tier2
