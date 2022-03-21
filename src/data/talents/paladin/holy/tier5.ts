import { Talent } from '../../Classes'

const tier5 = [
  null,
  new Talent(
    'Divine Favor',
    'spell_holy_heal',
    ['When activated, gives your next Flash of Light, Holy Light, Judgement or Holy Shock spell a 100% critical effect chance.'],
    1,
    [[1]],
    [{ x: 3, y: 1 }],
    [{ x: 6, y: 1 }],
    '4% of base mana',
    null,
    'Instant',
    '2 min cooldown',
    ['D2'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    'Lasting Judgement',
    'spell_holy_healingaura',
    [
      'Reduces the Mana cost of your Seal of Light and Seal of Wisdom by ',
      '% and increases the duration of your Judgement of Light and Judgement of Wisdom by ',
      ' sec.',
    ],
    2,
    [
      [25, 50],
      [10, 20],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
]

export default tier5
