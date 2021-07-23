import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Sap', 'sap', ['Gives you a ', '% chance to return to stealth mode after using sap.'], 3, [[30, 60, 90]]),
  new Talent(
    'Serrated Blades',
    'serrated-blades',
    [
      "Your attacks ignore an amount of your target's armor and increases the damage dealt by your rupture ability by ",
      '%. The amount of armor ignored increases with your level.',
    ],
    3,
    [[10, 20, 30]],
    null,
    [{ x: 4, y: 3 }],
    null,
    null,
    null,
    null,
    ['R1D1']
  ),
  null,
]
