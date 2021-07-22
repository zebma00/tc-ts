import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Illumination',
    'illumination',
    [
      'After getting a critical effect from your Flash of Light, Holy Light or Holy Shock heal spell, gives you a ',
      '% chance to gain mana equal to the base cost of the spell.',
    ],
    5,
    [[20, 40, 60, 80, 100]],
    [{ x: null, y: null }],
    [{ x: 4, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent('Improved Blessing of Wisdom', 'blessing-wisdom', ['Increases the effect of your Blessing of Wisdom spell by ', '%.'], 2, [[10, 20]]),
  null,
]
