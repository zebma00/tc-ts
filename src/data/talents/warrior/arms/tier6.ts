import { Talent } from '../../Classes'

const tier6 = [
  new Talent('Blood Frenzy', 'ability_warrior_bloodfrenzy', ['Your Rend and Deep Wounds abilities also increase all physical damage caused to that target by ', '%.'], 2, [[2, 4]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
  new Talent('Rolling Thunder', 'spell_nature_thunderclap', ['Increases the damage of your Thunder Clap by ', '% when hitting only one target.'], 3, [[100, 200, 300]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
]

export default tier6
