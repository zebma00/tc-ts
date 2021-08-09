import { Talent } from '../../Classes'

export default [
  new Talent('Improved Sunder Armor', 'rejuvenation', ['Reduces the cost of your Sunder Armor by ', '%.'], 3, [[1, 2, 3]]),
  new Talent('Improved Disarm', 'tranquil-spirit', ['Increases the duration of your Disarm ability by', ' sec.'], 3, [[1, 2, 3]]),
  new Talent('Improved Taunt', 'rejuvenation', ['Reduces the cooldown of your Taunt ability by ', ' sec.'], 2, [[1, 2]]),
  new Talent('Improved Shield Bash', 'rejuvenation', ['Gives your Shield Bash a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
]
