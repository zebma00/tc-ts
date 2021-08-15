import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Soul Link',
    'spell_shadow_gathershadows',
    [
      'While active, 30% of all damage taken by the Warlock is transferred to the active demon. In addition, both the Warlock and the demon cause 3% more damage. Active as long as a demon is active.',
    ],
    1,
    [[]],
    [{ x: 5, y: 1 }],
    null,
    '20% of base mana',
    '100 yd range',
    'Instant'
  ),
  new Talent('Improved Spellstone', 'inv_misc_gem_sapphire_01', ['Increases the damage absorbed by your Spellstone by ', '%.'], 2, [[15, 30]]),
  null,
]
