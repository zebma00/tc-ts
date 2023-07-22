import { Talent } from '../../Classes'

const tier6 = [
  null,
  new Talent(
    'Totemic Fury',
    'spell_fire_totemofwrath',
    ['Your critical strikes with melee attacks increase the effect of your totems that affect friendly targets by ', '% for 8 sec and reduce the cooldown of your totems that are on cooldown by ', ' sec.'],
    2,
    [
      [15, 30],
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
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent('Weapon Mastery', 'ability_hunter_swiftstrike', ['Increases the damage you deal with all weapons by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]

export default tier6
