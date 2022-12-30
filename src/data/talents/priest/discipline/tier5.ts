import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Focus Power',
    'ability_paladin_infusionoflight',
    ["When activated, your next damaging spell reduces the target's attributes by 25% for 5 sec or your next healing spell increases the target's attributes by 25% for 5 sec."],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant',
    '1 min cooldown',
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent(
    'Force of Will',
    'spell_nature_slowingtotem',
    ['Increases the critical strike chance of your offensive spells by ', '% and your spell damage by ', '%.'],
    3,
    [
      [2, 4, 6],
      [2, 4, 6],
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
      isChanged: true,
      isMoved: true,
    }
  ),
  new Talent('Divine Spirit', 'spell_holy_divinespirit', ['Holy power infuses the target, increasing their spirit by 17.'], 1, [[]], [{ x: 2, y: 2 }], null, '70 Mana', '30 yd range', 'Instant'),
  null,
]

export default tier5
