import { Talent } from '../../Classes'

export default [
  new Talent(
    'Elemental Focus',
    'clearcasting',
    [
      'After landing a critical strike with a Fire, Frost or Nature damage spell, you enter a Clearcasting state. The Clearcasting state reduces the mana cost of your next two damage spells by 40%.',
    ],
    1,
    [[]]
  ),
  new Talent('Reverberation', 'frost-warding', ['Reduces the cooldown of your Shock spells by ', 'sec.'], 5, [[0.1, 0.2, 0.3, 0, 4, 0, 5]]),
  new Talent(
    'Call of Thunder',
    'call-of-thunder',
    ['Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional ', '%.'],
    5,
    [[1, 2, 3, 4, 6]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ['D3']
  ),
  null,
]
