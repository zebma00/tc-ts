import { Talent } from '../../Classes'

const tier5 = [
  null,
  new Talent(
    'Divine Favor',
    'spell_holy_heal',
    ['When activated, gives your next Flash of Light, Holy Light or Holy Shock spell a 100% critical effect chance.'],
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
    'Vigilance',
    'spell_holy_purifyingpower',
    ['Your Judgement returns ', '% of the mana cost of the judged seal. In addition, increases range of your Judgement by ', ' yards.'],
    2,
    [
      [35, 70],
      [5, 10],
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
  null,
]

export default tier5
