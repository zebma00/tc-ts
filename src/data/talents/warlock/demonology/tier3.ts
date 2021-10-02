import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Succubus',
    'spell_shadow_summonsuccubus',
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
    'spell_shadow_psychicscream',
    [
      'Sacrifices your demon to get an effect that lasts 30 min. Any demon summoned cancels the effect. Imp: increases your Fire damage by 15%. Void Walker: reduces threat caused by your damaging spells by 30%. Succubus: increases your Shadow damage 15%. Felhunter: regenerate 3% of total Health and Mana every 5 sec.',
    ],
    1,
    [[]],
    null,
    null,
    '100 yd range',
    null,
    'Instant'
  ),
  new Talent(
    'Fel Stamina',
    'spell_shadow_antishadow',
    ['Increases the Stamina of your Imp, Succubus, Void Walker and Felhunter by ', '% and increases your maximum health by ', '%.'],
    3,
    [
      [5, 10, 15],
      [1, 2, 3],
    ]
  ),
  new Talent(
    'Mana Feed',
    'spell_shadow_manafeed',
    ['When you gain mana from Drain mana or Life Tap spells, your pet gains ', '% of the mana you gain.'],
    3,
    [[33, 66, 100]]
  ),
]
