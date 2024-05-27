import { Talent } from '../../Classes'

export default [
  new Talent(
    'Trap Mastery',
    'spell_nature_timestop',
    ['Increases the duration of your Freezing and Frost traps by ', '% and the damage of your Explosive and Immolations traps by ', '%. In addition, reduces the chance your traps are resisted by ', '% and reduces the time to arm traps by ', 'sec.'],
    2,
    [
      [15, 30],
      [15, 30],
      [5, 10],
      [0.5, 1],
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
  new Talent('Survivalist', 'spell_shadow_twilight', ['Increases total health by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent('Deterrence', 'ability_whirlwind', ['When activaed, increases dodge and parry chance by 25% for 10 sec.'], 1, [[]], [{ x: null, y: null }], [{ x: 4, y: 2 }], null, null, 'Instant', '5 min cooldown', ['D2']),
  new Talent(
    'Diligence',
    'spell_shadow_summonimp',
    ['Increases your damage by ', '% and reduces the mana cost of your abilities by ', '% for 15 sec after a one of your traps is triggered.'],
    2,
    [
      [5, 10],
      [15, 30],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isChanged: false,
      isMoved: false,
      isNew: true,
    }
  ),
]
