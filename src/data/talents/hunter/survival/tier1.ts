import { Talent } from '../../Classes'

export default [
  new Talent('Monster Slaying', 'inv_misc_head_dragon_black', ['Increases damage and critical damage by an additional ', '% against Beast, Giant and Dragonkin targets.'], 3, [[1, 2, 3]]),
  new Talent('Humanoid Slaying', 'spell_holy_prayerofhealing', ['Increases damage and critical damage by an additional ', '% against Humanoid targets.'], 3, [[1, 2, 3]]),
  new Talent('Deflection', 'ability_parry', ['Increases your parry chance by ', '%.'], 3, [[2, 4, 6]], null, null, null, null, null, null, null, { isNew: false, isChanged: true, isMoved: false }),
  new Talent('Hawk Eye', 'ability_townwatch', ['Increases the range of your ranged weapons by ', ' yards.'], 3, [[2, 4, 6]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
]
