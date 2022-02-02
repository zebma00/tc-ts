import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Divine Favor',
    'spell_holy_heal',
    ['When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance.'],
    1,
    [[1]],
    [{ x: 3, y: 1 }],
    [{ x: 6, y: 1 }],
    '4% of base mana',
    null,
    'Instant',
    '2 min cooldown',
    ['D2']
  ),
  new Talent(
    'Lasting Judgement',
    'spell_holy_healingaura',
    ['Increases the effect of your Judgement of Wisdom and Judgement of Light by ', '% and increases the duration by ', ' sec.'],
    2,
    [
      [10, 20],
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
