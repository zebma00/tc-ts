import { Talent } from '../../Classes'

export default [
  new Talent('Improved Mana Shield', 'mana-shield', ['Decreases the mana lost per point of damage when Mana Shield is active by ', '%.'], 2, [
    [10, 20],
  ]),
  new Talent('Improved Counterspell', 'counterspell', ['Gives your counterspell a ', ' chance to silence the target for 4 sec.'], 2, [[50, 100]]),
  null,
  new Talent('Arcane Meditation', 'mindflay', ['Allows ', ' of your Mana regeneration to continue while casting.'], 3, [[10, 20, 30]]),
]
