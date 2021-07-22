import { Talent } from '../../Classes'

export default [
  new Talent(
    'Holy Verdict',
    'holy-verdict',
    ['Increases the damage and critical strike chance of your damaging Holy Shock and damaging Judgement spells by ', '%.'],
    2,
    [[10, 20]]
  ),
  new Talent(
    'Divine Favor',
    'divine-favor',
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
    "Light's Grace",
    'lights-grace',
    ['Gives your Holy Light spell a ', '% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec.'],
    3,
    [[33, 67, 100]]
  ),
  null,
]
