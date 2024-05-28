import { Talent } from '../../Classes'

const tier1 = [
  null,
  new Talent('Master of Deception', 'spell_shadow_charm', ['Reduces the chance enemies can detect you while in stealth.'], 5, [[]]),
  new Talent('Opportunity', 'ability_warrior_warcry', ['Increases the damage when striking from behind with your Mutilate, Backstab, Ambush and Garrote abilities by ', '%.'], 5, [[4, 8, 12, 16, 20]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  null,
]

export default tier1
