import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    'Wand Specialization',
    'inv_wand_01',
    ['When you deal damage with your wand, you have ', ' chance to return 20% of the damage dealt as mana to you.'],
    2,
    [['a', 'an increased']],
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
    ['Increases all resistances by ', ' and causes you to restore ', '% mana after fully resisting or fully absorbing spell damage. 8 sec cooldown.'],
    2,
    [
      [5, 10],
      [2, 4],
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
    ['Gives you a ', '% chance of entering a clearcasting state after any damage spell hits a target. The clearcasting state reduces the mana cost of your next damage spell by 100%.'],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  new Talent(
    'Wizardry',
    'ability_mage_potentspirit',
    [
      'Your Arcane Missiles, Fireball, Frostbolt and Scorch increase the damage done by your Arcane Missiles, Fireball, Frostbolt and Scorch by ',
      '% for 30 sec. This effect stacks up to 5 times. This effect is lost when casting the same spell twice in a row.',
    ],
    2,
    [[2, 4]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier2
