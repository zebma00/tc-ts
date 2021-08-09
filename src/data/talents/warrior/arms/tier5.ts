import { Talent } from '../../Classes'

export default [
  new Talent(
    'Poleaxe Specialization',
    'starfire',
    ['Increases your critical strike chance and critical strike damage with Polearms and Axes by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  new Talent(
    'Sweeping Strikes',
    'natures-grace',
    ['Your next 5 melee attacks strike an additional nearby target.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    '30 Rage',
    null,
    'Instant cast',
    '30 sec cooldown',
    ['D2']
  ),
  new Talent('Mace Specialization', 'moonglow', ['Gives you a ', '% chance to stun the target for 3 sec and generate 7 rage when using a Mace.'], 5, [
    [1, 2, 3, 4, 6],
  ]),
  new Talent(
    'Sword Specialization',
    'moonglow',
    ['Gives you a ', '% chance to get an additional attack against the same target when using a Sword.'],
    5,
    [[1, 2, 3, 4, 5]]
  ),
]
