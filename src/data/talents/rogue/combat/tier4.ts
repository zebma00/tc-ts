import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Improved Kick', 'ability_kick', ['Gives your Kick ability a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
  new Talent(
    'Close Combat Specialization',
    'inv_weapon_shortblade_05',
    ['Increases your critical strike chance and critical strike damage with daggers and fist weapons by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent(
    'Dual Wield Specialization',
    'ability_dualwield',
    ['Increases the damage of your off-hand weapon by ', '%.'],
    5,
    [[10, 20, 30, 40, 50]],
    [{ x: 1, y: 2 }]
  ),
  new Talent(
    'Throwing Weapon Specialization',
    'inv_throwingknife_01',
    [
      'Increases your range with throwing weapons by ',
      ' yards and gives you a ',
      '% chance to throw an additional time when using throwing weapons.',
    ],
    2,
    [
      [3, 6],
      [25, 50],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier4
