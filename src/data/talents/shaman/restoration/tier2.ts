import { Talent } from '../../Classes'

export default [
  new Talent('Ancestral Strength', 'spell_shadow_deathpact', ['Increases your Strength by ', '% of your Intellect.'], 3, [[10, 20, 30]]),
  new Talent(
    'Ancestral Healing',
    'spell_nature_undyingstrength',
    ['Increases your targets armor value by ', '% for 15 sec after getting a critical effect from one of your healing spells.'],
    3,
    [[8, 16, 26]]
  ),
  new Talent('Totemic Focus', 'spell_nature_moonglow', ['Reduces the mana cost of your totems by ', '%.'], 5, [[5, 10, 15, 20, 25]]),
  new Talent(
    'Spiritual Warding',
    'spell_nature_spiritarmor',
    ['Reduces the damage taken from Frost, Fire and Nature spells and effects by ', '% and In addition, increases your healing taken by ', '%.'],
    3,
    [
      [4, 7, 10],
      [2, 4, 6],
    ]
  ),
]
