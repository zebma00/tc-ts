import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Toughness',
    'spell_holy_devotion',
    ['Increases your armor by ', '% and reduces the duration of movement slowing effects on you by ', '%.'],
    5,
    [
      [2, 4, 6, 8, 10],
      [10, 20, 30, 40, 50],
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
  new Talent(
    'Improved Hammer of Justice',
    'spell_holy_sealofmight',
    ['Reduces the cooldown of your Hammer of Justice spell by ', ' sec.'],
    3,
    [[5, 10, 15]]
  ),
  new Talent(
    'Improved Concentration Aura',
    'spell_holy_mindsooth',
    [
      'Increases the effect of you Concentration Aura by an additional ',
      '% and gives all group members effected by the aura an additional ',
      '% chance to resist silence and interrupt effects.',
    ],
    3,
    [
      [5, 10, 15],
      [5, 10, 15],
    ]
  ),
  null,
]

export default tier4
