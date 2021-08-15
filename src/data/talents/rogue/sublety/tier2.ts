import { Talent } from '../../Classes'

export default [
  new Talent(
    'Sleight of Hand',
    'ability_rogue_feint',
    ['Reduces the chance you are hit by enemy melee and ranged attacks by ', '% and increases the threat reduction of your feint by ', '%.'],
    2,
    [
      [1, 2],
      [10, 20],
    ]
  ),
  new Talent('Elusiveness', 'spell_magic_lesserinvisibilty', ['Reduces the cooldown of you Vanish and Blind abilities by ', ' sec.'], 2, [[45, 90]]),
  new Talent(
    'Camouflage',
    'ability_stealth',
    ['Increases your speed while stealthed by ', '% and reduces the cooldown of your Stealth ability by ', ' sec.'],
    5,
    [
      [3, 6, 9, 12, 15],
      [1, 2, 3, 4, 5],
    ]
  ),
  new Talent(
    'Setup',
    'spell_nature_mirrorimage',
    ['Gives you a ', '% chance to add a combo point to the target after dodging or parrying an attack or fully resisting one of their spells.'],
    2,
    [[25, 50]]
  ),
]
