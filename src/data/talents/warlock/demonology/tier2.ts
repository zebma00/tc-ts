import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Health Funnel',
    'shadowmeld',
    [
      'Increases the amount of Health transferred by your Health Funnel spell by ',
      '% and reduces the Health cost by ',
      '%. In addition your Demon takes ',
      '% less damage while under the effect of your Health Funnel.',
    ],
    2,
    [
      [10, 20],
      [10, 20],
      [15, 30],
    ]
  ),
  new Talent(
    'Improved Void Walker',
    'bash',
    ["Increases the effect of your Void Walker's Torment, Sacrifice, Consume Shadows and Suffering spells by ", '%.'],
    3,
    [[10, 20, 30]]
  ),
  new Talent('Fel Intellect', 'thick-hide', ['Increases the Mana and Spell Damage of your Imp, Succubus, Void Walker and Felhunter by ', '%'], 3, [
    [5, 10, 15],
  ]),
  null,
]
