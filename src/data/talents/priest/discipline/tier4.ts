import { Talent } from '../../Classes'

export default [
  new Talent('Improved Inner Fire', 'consecration', ['Increases the armor bonus of your Inner Fire spell by ', '%.'], 3, [[10, 20, 30]]),
  new Talent('Mental Agility', 'mental-agility', ['Reduces the mana cost of your instant cast spells by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
  new Talent('Improved Mana Burn', 'clearcasting', ['Reduces the casting time of your Mana Burn spell by ', ' sec.'], 2, [[0.5, 1]]),
]
