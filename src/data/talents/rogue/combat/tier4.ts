import { Talent } from '../../Classes'

export default [
  new Talent('Improved Kick', 'ability_kick', ['Gives your Kick ability a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
  new Talent(
    'Dagger and Fist Weapon Specialization',
    'inv_weapon_shortblade_05',
    ['Increases your chance to get a critical strike with daggers and fist weapons by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]]
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
    'Blade Twisting',
    'ability_rogue_bladetwisting',
    ['Gives your Sinister Strike, Backstab and Hemorrhage abilities a ', '% chance to daze the target for 8 sec.'],
    2,
    [[10, 20]],
  ),
]
