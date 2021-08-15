import { Talent } from '../../Classes'

export default [
  new Talent(
    'Pyroclasm',
    'spell_fire_volcano',
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
    'spell_fire_immolation',
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
  new Talent(
    'Ruin',
    'spell_shadow_shadowwordpain',
    ['Increases the critical strike damage bonus of your Destruction spells by 100%.'],
    1,
    [[]],
    [{ x: 2, y: 2 }]
  ),
  new Talent(
    'Havoc',
    'spell_fire_playingwithfire',
    ['When you get two critical hits from spells in a row, gain a ', '% chance to reset the cooldown of your Soul Shatter.'],
    2,
    [[25, 50]]
  ),
]
