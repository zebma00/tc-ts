import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Convection', 'arcane-explosion', ['Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by ', '%.'], 5, [
    [2, 4, 6, 8, 10],
  ]),
  new Talent('Concussion', 'fire-blast', ['Increases the damage done by your Shock, Lightning Bolt and Chain Lightning spells by ', '%.'], 5, [
    [1, 2, 3, 4, 5],
  ]),
  null,
]
