import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Efficiency', 'efficiency', ['Reduces the Mana cost of your Shots and Sting by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
  new Talent('Improved Concussive Shot', 'natures-guidance', ['Gives your Concussive Shot a ', '% chance to stun the target for 3 sec.'], 5, [
    [4, 8, 12, 16, 20],
  ]),
]
