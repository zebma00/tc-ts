import { Talent } from '../../Classes'

export default [
  new Talent('Improved Demon Armor', 'spell_shadow_ragingscream', ['Causes your Demon armor to also restore ', '% of your total mana every 3 sec.'], 2, [
    [0.5, 1],
  ]),
  new Talent(
    'Improved Void Walker',
    'spell_shadow_summonvoidwalker',
    ["Increases the effect of your Void Walker's Torment, Sacrifice, Consume Shadows and Suffering spells by ", '%.'],
    3,
    [[10, 20, 30]]
  ),
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
    'Improved Fire Stone',
    'inv_ammo_firetar',
    ['Your Firestone also increases your chance to hit with Fire spells by ', '% and reduces threat caused by your Fire spells by ', '%.'],
    2,
    [
      [2, 4],
      [15, 30],
    ]
  ),
]
