import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    'Wand Specialization',
    'inv_wand_01',
    ['Increases the damage you deal with wands by ', '% while you have less than 30% of your total mana.'],
    2,
    [[25, 50]],
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
    'Magic Absorbtion',
    'spell_nature_astralrecalgroup',
    [
      'Increases all resistances by ',
      ' and causes you to restore ',
      '% mana after fully resisting or fully absorbing spell damage. 8 sec cooldown.',
    ],
    3,
    [
      [4, 7, 10],
      [2, 4, 6],
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
    'Arcane Concentration',
    'spell_shadow_manaburn',
    [
      'Gives you a ',
      '% chance of entering a clearcasting state after any damage spell hits a target. The clearcasting state reduces the mana cost of your next damage spell by 100%.',
    ],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  null,
]

export default tier2
