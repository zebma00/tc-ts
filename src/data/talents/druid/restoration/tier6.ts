import { Talent } from '../../Classes'

const tier6 = [
  new Talent('Revitalize', 'ability_druid_empoweredrejuvination', ['Your Rejuvenation and Regrowth spells have a ', '% chance to restore 8 Energy, 4 Rage or 1% Mana per tick.'], 3, [[5, 10, 15]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
  new Talent('Improved Regrowth', 'spell_nature_resistnature', ['Increases the critical effect chance of your Regrowth spell by ', '%.'], 5, [[10, 20, 30, 40, 50]]),
  null,
]

export default tier6
