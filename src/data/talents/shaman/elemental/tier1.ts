import { Talent } from '../../Classes'

export default [
  new Talent("Nature's Guidance", 'natures-guidance', ['Increases your chance to hit with melee attacks and spells by ', '%.'], 3, [[1, 2, 3]]),
  new Talent('Convection', 'arcane-explosion', ['Reduces the mana cost of your Shock, Lightning Bolt and Chain Lightning spells by ', '%.'], 5, [
    [2, 4, 6, 8, 10],
  ]),
  new Talent('Concussion', 'fire-blast', ['Increases the damage done by your Shock, Lightning Bolt and Chain Lightning spells by ', '%.'], 5, [
    [1, 2, 3, 4, 5],
  ]),
  null,
]
