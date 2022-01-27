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
    'Fel Domination',
    'spell_nature_removecurse',
    ['Your next summon of Succubus, Imp, Felhunter or Void Walker has its casting time reduced by 5.5 sec and Mana cost reduced by 50%.'],
    1,
    [[]],
    null,
    [{ x: 3, y: 1 }],
    null,
    null,
    'Instant',
    '15 min cooldown',
    ['D1']
  ),
  new Talent(
    'Fel Power',
    'spell_shadow_antishadow',
    ['Increases the Stamina of your Imp, Succubus, Void Walker and Felhunter by ', '% and increases your maximum health by ', '%.'],
    3,
    [
      [5, 10, 15],
      [1, 2, 3],
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
      isMoved: false
    }
  ),
  new Talent(
    'Mana Feed',
    'spell_shadow_manafeed',
    ['When you gain mana from Drain mana or Life Tap spells, your pet gains ', '% of the mana you gain.'],
    3,
    [[33, 66, 100]],
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
      isMoved: false
    }
  ),
]
