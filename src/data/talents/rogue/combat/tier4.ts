import { Talent } from '../../Classes'

export default [
  new Talent('Improved Kick', 'surefooted', ['Gives your Kick ability a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
  new Talent(
    'Dagger and Fist Weapon Specialization',
    'dagger-spec',
    ['Increases your chance to get a critical strike with daggers and fist weapons by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  new Talent(
    'Dual Wield Specialization',
    'dual-wield-spec',
    ['Increases the damage of your off-hand weapon by ', '%.'],
    5,
    [[10, 20, 30, 40, 50]],
    [{ x: 1, y: 2 }]
  ),
  null,
]
