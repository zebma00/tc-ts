import { Talent } from '../../Classes'

export default [
  new Talent(
    'Fel Armor',
    'rake',
    [
      'Surrounds the caster with fel energy, increasing the amount of health generated through spells and effects by 20% and increasing spell hit chance by 3%. Only one type of Armor spell can be active on the Warlock at any time. Lasts 30 min.',
    ],
    1,
    [[]],
    null,
    null,
    '437 Mana',
    'Instant'
  ),
  null,
  new Talent(
    'Fel Domination',
    'faerie-fire',
    ['Your next summon of Succubus, Imp, Felhunter or Void Walker has its casting time reduced by 5.5 sec and Mana cost reduced by 50%.'],
    1,
    [[]],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    'Instant',
    '15 min cooldown'
  ),
  null,
]
