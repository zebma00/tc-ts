import { Talent } from '../../Classes'

export default [
  new Talent(
    'Mace Specialization',
    'inv_mace_01',
    ['Increases your skill with maces by ', ' and gives you a ', '% chance to stun your target for 3 sec with a mace.'],
    5,
    [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 6],
    ],
  ),
  new Talent(
    'Blade Flurry',
    'ability_warrior_punishingblow',
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
    'inv_sword_27',
    ['Gives you a ', '% chance to trigger an additional attack against the same target when using swords.'],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  null,
]
