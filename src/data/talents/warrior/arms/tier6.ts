import { Talent } from '../../Classes'

const tier6 = [
  new Talent('Blood Frenzy', 'ability_warrior_bloodfrenzy', ['Your Rend and Deep Wounds abilities also increase all physical damage caused to that target by ', '%.'], 2, [[2, 4]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
  new Talent('Master of Arms', 'spell_holy_sealofwrath', ['Increases your skill with all weapons by ', '.'], 3, [[3, 6, 9]], null, null, null, null, null, null, null, { isNew: true, isChanged: false, isMoved: false }),
  null,
]

export default tier6
