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
  new Talent('Efficiency', 'spell_frost_wizardmark', ['Reduces the Mana cost of your Shots and Stings by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent('Hawk Eye', 'ability_townwatch', ['Increases the range of your ranged weapons by ', ' yards.'], 3, [[2, 4, 6]]),
]
