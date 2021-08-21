import { Talent } from '../../Classes'

export default [
  new Talent(
    'Aimed Shot',
    'inv_spear_07',
    ['An aimed shot that increases range damage by 70.'],
    1,
    [[]],
    null,
    null,
    '75 Mana',
    '8 - 35 yd range',
    '3 sec cast',
    '6 sec cooldown'
  ),
  new Talent('Improved Arcane Shot', 'ability_impalingbolt', ['Reduces the cooldown of your Arcane Shot by ', ' sec.'], 3, [[0.4, 0.7, 1]]),
  new Talent(
    'Mortal Shots',
    'ability_piercedamage',
    ['Increases your ranged critical strike damage bonus by ', '%.'],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: 1, y: 2 }]
  ),
  new Talent('Hawk Eye', 'ability_townwatch', ['Increases the range of your ranged weapons by ', ' yards.'], 3, [[2, 4, 6]]),
]
