import { Talent } from '../../Classes'

export default [
  new Talent(
    'Brain Freeze',
    'spell_frost_frozencore',
    [
      'Gives your Frost spells a ',
      '% chance to apply the Brain Freeze effect, which increases the critical strike damage taken by the target by 3% for 15 sec. This effect stacks up to 5 times.',
    ],
    2,
    [[33, 66, 100]]
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
