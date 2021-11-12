import { Talent } from '../../Classes'

export default [
  new Talent(
    'Fel Protection',
    'spell_shadow_demonictactics',
    [
      "Increases your demon's chance to dodge or resist are of effect damage by ",
      '% and increases your chance to dodge or resist are of effect damage by ',
      '%.',
    ],
    3,
    [
      [25, 50, 75],
      [15, 30, 45],
    ]
  ),
  new Talent(
    'Demonic Sacrifice',
    'spell_shadow_psychicscream',
    [
      'Sacrifices your demon to get an effect that lasts 30 min. Any demon summoned cancels the effect. Imp: increases your Fire damage by 15%. Void Walker: reduces threat caused by your damaging spells by 30%. Succubus: increases your Shadow damage 15%. Felhunter: increases Health and Mana received from all sources by 15%.',
    ],
    1,
    [[]],
    null,
    [{x: 6, y: 1}],
    '100 yd range',
    null,
    'Instant',
    null,
    ['D2']
  ),
  null,
  null,
]
