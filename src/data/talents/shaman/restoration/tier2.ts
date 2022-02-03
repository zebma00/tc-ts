import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    'Improved Reincarnation',
    'spell_nature_reincarnation',
    [
      'Reduces the cooldown of your reincarnation spell by ',
      ' min and increases the amount of health and mana you reincarnate with by an additional ',
      '%.',
    ],
    2,
    [
      [10, 20],
      [10, 20],
    ]
  ),
  new Talent(
    'Ancestral Healing',
    'spell_nature_undyingstrength',
    [
      'Increases your targets armor value by ',
      '% for 15 sec after getting a critical effect from one of your healing spells. Increases your armor value by ',
      '% after receiving a critical heal.',
    ],
    3,
    [
      [8, 16, 25],
      [8, 16, 25],
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
      isMoved: false,
    }
  ),
  new Talent(
    'Tidal Focus',
    'spell_frost_manarecharge',
    ['Reduces the Mana cost of your healing spells by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  null,
]

export default tier2
