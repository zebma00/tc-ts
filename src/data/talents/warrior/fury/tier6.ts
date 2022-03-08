import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Improved Berserker Rage',
    'spell_nature_ancestralguardian',
    ['Causes your Berserker Rage to generate ', ' rage when used.'],
    2,
    [
      [5, 10],
    ],
  ),
  null,
  new Talent(
    'Flurry',
    'ability_ghoulfrenzy',
    ['Increases your attack speed by ', '% for your next 3 swings after dealing a melee critical strike.'],
    5,
    [[10, 20, 30, 40, 50]],
    [{ x: 3, y: 2 }]
  ),
  null,
]

export default tier6
