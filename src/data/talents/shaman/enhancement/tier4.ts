import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Flurry',
    'ability_ghoulfrenzy',
    ['Increases your attack speed by ', '% for your next 3 swings after dealing a critical strike.'],
    5,
    [[10, 15, 20, 25, 30]],
    [{ x: 1, y: 1 }]
  ),
   new Talent(
    'Improved Lightning Shield',
    'spell_nature_lightningshield',
    ['Your Lightning Shield orbs heal you for ', '% of damage dealt.'],
    3,
    [
      [15, 30, 45],
    ]
  ),
  null,
]
