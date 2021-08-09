import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Healing Touch',
    'spell_nature_healingtouch',
    ['Reduces the cast time of your Healing Touch spell by ', 'sec.'],
    5,
    [[0.1, 0.2, 0.3, 0.4, 0.5]],
    [{ x: null, y: null }],
    [{ x: 4, y: 0 }]
  ),
  new Talent(
    "Nature's Focus",
    'spell_nature_healingwavegreater',
    ['Gives you a ', '% chance to avoid interruption caused by damage while casting the Healing Touch, Regrowth and Tranquility spells.'],
    5,
    [[14, 28, 42, 56, 70]]
  ),
  new Talent('Improved Enrage', 'ability_druid_enrage', ['The Enrage ability now instantly generates ', 'rage.'], 2, [[5, 10]]),
  new Talent('Natural Strength', 'inv_misc_monsterclaw_03', ['Increases your Strength by ', '% of your Intellect in any form.'], 3, [[10, 20, 30]]),
]
