import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Succubus',
    'ghost-wolf',
    [
      "Increases the effect of your Succubus' Lash of Pain and Soothing Kiss by ",
      '% and increases the duration of Seduction and Invisibility by ',
      '%.',
    ],
    3,
    [
      [10, 20, 30],
      [10, 20, 30],
    ]
  ),
  new Talent(
    'Demonic Sacrifice',
    'feral-charge',
    [
      'Sacrifices your demon to get an effect that lasts 30 min. Any demon summoned cancels the effect. Imp: increases your Fire damage by 15%. Void Walker: Increases health gained from all sources by 15%. Succubus: increases your Shadow damage 15%. Felhunter: X',
    ],
    1,
    [[]],
    null,
    null,
    '100 yd range',
    null,
    'Instant'
  ),
  new Talent('Fel Stamina', 'maul', ['Increases the Health and Attack Power of your Imp, Succubus, Void Walker and Felhunter by ', '%.'], 3, [
    [5, 10, 15],
  ]),
  null,
]
