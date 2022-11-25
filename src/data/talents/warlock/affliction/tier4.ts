import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Grim Reach', 'spell_shadow_callofbone', ['Increases the range of your Affliction spells by ', '%.'], 2, [[10, 20]]),
  new Talent(
    'Nightfall',
    'spell_shadow_twilight',
    [
      'Gives your Corruption and Drain Life spells a ',
      '% chance to cause you to enter a Shadow Trance state after damaging an opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.',
    ],
    2,
    [[2, 4]]
  ),
  null,
  new Talent(
    'Eradication',
    'ability_creature_cursed_03',
    ['Increases your spell damage by ', '% but reduces your spell critical strike chance by ', '%.'],
    3,
    [
      [3, 6, 9],
      [2, 4, 6],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
]

export default tier4
