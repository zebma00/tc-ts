import { Talent } from '../../Classes'

export default [
  new Talent(
    'Empowered Frostbolt',
    'spell_frost_frostbolt02',
    ['Your Frostbolt increases the critical strike damage of your Frostbolt by ', '%. This effect stacks up to 3 times. Lasts 8 sec.'],
    3,
    [[4, 7, 10]]
  ),
  new Talent(
    'Ice Block',
    'spell_frost_frost',
    [
      'You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec. During that time you cannot move, attack or cast spells.',
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [
      {
        x: 6,
        y: 1,
      },
    ],
    '15 mana',
    null,
    'Instant',
    '5 min cooldown',
    ['D2']
  ),
  new Talent('Improved Cone of Cold', 'spell_frost_glacier', ['Increases the damage done by your Cone of Cold spell by ', '%.'], 3, [[5, 10, 15]]),
  null,
]
