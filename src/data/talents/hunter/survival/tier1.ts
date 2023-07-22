import { Talent } from '../../Classes'

export default [
  new Talent('Wild Assault', 'ability_warrior_punishingblow', ["Your pet's critical strikes from abilities have a ", '% chance to enable your Mongoose Bite.'], 2, [[50, 100]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent(
    'Improved Tracking',
    'ability_tracking',
    ['While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent('Deflection', 'ability_parry', ['Increases your parry chance by ', '%.'], 3, [[2, 4, 6]], null, null, null, null, null, null, null, { isNew: false, isChanged: true, isMoved: false }),
  null,
]

//<div class="q">While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids and Undead, all damage done to those types by the Hunter is increased by 1%.</div>
