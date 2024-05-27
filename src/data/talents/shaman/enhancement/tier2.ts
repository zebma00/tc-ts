import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Guardian Totems', 'spell_nature_stoneskintotem', ['Increases the effect of your Stoneskin Totem by ', '% and reduces the cooldown of your Grounding Totem by ', ' sec.'], 2, [
    [10, 20],
    [1, 2],
  ]),
  new Talent(
    'Thundering Strikes',
    'ability_thunderbolt',
    ['Increases your chance to get a critical strike with weapon attacks by ', '% and increases your spell damage by ', '% of your attack power.'],
    5,
    [
      [1, 2, 3, 4, 5],
      [6, 12, 18, 24, 30],
    ],
    [{ x: null, y: null }],
    [{ x: 3, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent('Improved Ghost Wolf', 'spell_nature_spiritwolf', ['Reduces the cast time of your Ghost Wolf spell by ', ' sec.'], 2, [[1, 2]]),
  new Talent(
    'Improved Elemental Shields',
    'spell_nature_lightningshield',
    ['Increases the effect of your Lightning Shield orbs and Water Shield orbs by ', '% and increases their number of orbs by ', '.'],
    3,
    [
      [5, 10, 15],
      [1, 2, 3],
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
]

export default tier2
