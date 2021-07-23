import { Talent } from '../../Classes'

export default [
  new Talent(
    'Mace Specialization',
    'mace-spec',
    ['Increases your skill with maces by ', ' and gives you a ', '% chance to stun your target for 3 sec with a mace.'],
    5,
    [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 6],
    ]
  ),
  new Talent(
    'Blade Flurry',
    'blade-flurry',
    ['Increases your attack speed by 20%. In addition, attacks strike an additional nearby opponent. Lasts 15 sec.'],
    1,
    [[]],
    null,
    [{ x: 5, y: 1 }],
    '25 Energy',
    null,
    '2 min cooldown',
    'Instant',
    ['D1']
  ),
  new Talent(
    'Sword Specialization',
    'sword-spec',
    ['Gives you a ', '% chance to trigger an additional attack against the same target when using swords.'],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  null,
]
