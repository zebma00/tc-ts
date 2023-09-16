import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Fiery Resilience',
    'spell_fire_lavaspawn',
    ['Reduces the duration of crowd control effects on you by ', '%. In addition, critical hits against you have a ', '% chance to ignite the attacker, dealing Fire damage.'],
    3,
    [
      [10, 20, 30],
      [20, 40, 60],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
  new Talent('Fire power', 'spell_fire_immolation', ['Increases the damage fone by your Fire spells by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]

export default tier6
