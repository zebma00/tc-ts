import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Improved Concussive Shot', 'spell_frost_stun', ['Gives your Concussive Shot a ', '% chance to stun the target for 3 sec.'], 5, [
    [4, 8, 12, 16, 20],
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
      isChanged: false,
      isMoved: true
    }
  ),
  new Talent(
    'Mortal Shots',
    'ability_piercedamage',
    ['Increases your ranged critical strike damage bonus by ', '%.'],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: 0, y: 2 }],
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true
    }
  ),
  null,
]
