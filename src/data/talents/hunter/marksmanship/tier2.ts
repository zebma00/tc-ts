import { Talent } from '../../Classes'

export default [
  new Talent('Improved Arcane Shot', 'arcane-shot', ['Your Arcane Shot returns up to ', '% of your missing Mana.'], 3, [[2, 4, 6]]),
  new Talent('Efficiency', 'efficiency', ['Reduces the Mana cost of your Shots and Sting by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
  new Talent('Improved Concussive Shot', 'natures-guidance', ['Gives your Concussive Shot a ', '% chance to stun the target for 3 sec.'], 5, [
    [4, 8, 12, 16, 20],
  ]),
]
