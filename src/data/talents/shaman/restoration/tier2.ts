import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Reincarnation',
    'reincarnation',
    [
      'Reduces the cooldown of your Reincarnation spell by ',
      ' min and increases the amount of health and mana you reincarnate with an additional ',
      '%.',
    ],
    2,
    [
      [15, 30],
      [15, 30],
    ]
  ),
  new Talent(
    'Ancestral Healing',
    'ancestral-healing',
    ['Increases your targets armor value by ', '% for 15 sec after getting a critical effect from one of your healing spells.'],
    3,
    [[8, 16, 26]]
  ),
  new Talent('Totemic Focus', 'moonfury', ['Reduces the mana cost of your totems by ', '%.'], 5, [[5, 10, 15, 20, 25]]),
  new Talent(
    'Spiritual Warding',
    'spiritual-warding',
    ['Reduces the damage taken from Frost, Fire and Nature spells and effects by ', '% and In addition, increases your healing taken by ', '%.'],
    3,
    [
      [4, 7, 10],
      [2, 4, 6],
    ]
  ),
]
