import { Talent } from '../../Classes'

const tier5 = [
  null,
  new Talent(
    'Force of Will',
    'spell_nature_slowingtotem',
    ['Increases the critical strike chance of your offensive spells by ', '% and your spell damage by ', '%.'],
    5,
    [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  new Talent(
    'Divine Spirit',
    'spell_holy_divinespirit',
    [
      'Holy power infuses the target, increasing their spirit by 17 and increasing their spell damage by an amount equal to 10% of their spirit for 30 min.',
    ],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    null,
    '140 Mana',
    '30 yd range',
    'Instant',
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  null,
]

export default tier5
