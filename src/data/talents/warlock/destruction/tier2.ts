import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Bane', 'healing-touch', ['Reduces the casting time of your Shadow Bolt spells by ', ' sec and your Soul Fire spell by ', ' sec.'], 5, [
    [0.1, 0.2, 0.3, 0.4, 0.5],
    [0.4, 0.8, 1.2, 1.6, 2],
  ]),
  new Talent('Aftermath', 'chain-heal', ['Gives your Destruction spells a ', '% chance to daze the target for 5 sec.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]
