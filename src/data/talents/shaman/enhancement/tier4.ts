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
    'Shamanistic Focus',
    'spell_nature_elementalabsorption',
    [
      'After landing a melee critical strike, you have a ',
      '% chance to enter a focused state. The focused state reduces the mana cost of your next Shock spell by 60%.',
    ],
    2,
    [[50, 100]]
  ),
  null,
]
