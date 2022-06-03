import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Focused Will',
    'spell_nature_focusedmind',
    ['When activated, causes your next Flash Heal, Heal, Greater Heal, Renew, Power Word: Shield or Power Infusion cast on a friendly target to effect you as well.'],
    1,
    [[1]],
    null,
    null,
    null,
    null,
    'Instant',
    '1 min cooldown',
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
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
  new Talent('Divine Spirit', 'spell_holy_divinespirit', ['Holy power infuses the target, increasing their spirit by 17.'], 1, [[]], [{ x: 2, y: 2 }], null, '70 Mana', '30 yd range', 'Instant'),
  null,
]

export default tier5
