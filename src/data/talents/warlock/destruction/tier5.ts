import { Talent } from '../../Classes'

export default [
  new Talent(
    'Pyroclasm',
    'natures-swiftness',
    ['Gives your Rain of Fire, Hellfire and Soulfire a ', '% chance to stun the target for 3 sec.'],
    2,
    [[13, 26]],
    [
      {
        x: 3,
        y: 0,
      },
    ]
  ),
  new Talent(
    'Improved Immolate',
    'gift-of-nature',
    ['Increases the initial damage of your Immolate by ', '%.'],
    3,
    [[10, 20, 30]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent('Ruin', 'tranquility', ['Increases the critical strike damage bonus of your Destruction spells by 100%.'], 1, [[]], [{ x: 2, y: 2 }]),
  new Talent('Havoc', 'tranquility', ['Your spell crits reduce the cooldown of your Soul Shatter by ', ' sec.'], 2, [[3, 6]]),
]
