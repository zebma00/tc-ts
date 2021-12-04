import { Talent } from '../../Classes'

export default [
  new Talent(
    'Fel Power',
    'spell_shadow_antishadow',
    ['Increases the Stamina and Intellect of your Imp, Succubus, Void Walker and Felhunter by ', '%.'],
    3,
    [
      [5, 10, 15],
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
    'Mana Feed',
    'spell_shadow_manafeed',
    ['When you gain mana from Drain mana or Life Tap spells, your pet gains ', '% of the mana you gain.'],
    3,
    [[33, 66, 100]]
  ),
  null,
]
