import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Mace Specialization', 'inv_mace_01', ['Increases your skill with maces by ', ' and gives you a ', '% chance to stun your target for 3 sec with a mace.'], 5, [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 6],
  ]),
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
  new Talent('Sword Specialization', 'inv_sword_27', ['Gives you a ', '% chance to trigger an additional attack against the same target when using swords.'], 5, [[1, 2, 3, 4, 5]]),
  new Talent(
    'Shiv',
    'inv_throwingknife_04',
    ['Performs an instant off-hand weapon attack that automatically applies the poison from your off-hand weapon to the target. Slower weapons require more Energy. Awards 1 combo point.'],
    1,
    [[]],
    null,
    null,
    '20 Energy',
    'Instant',
    'Melee Range',
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
]

export default tier5
