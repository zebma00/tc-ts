import { Talent } from '../../Classes'

const tier4 = [
  null,
  new Talent('Vengeance', 'spell_nature_purge', ['Increases the critical strike damage bonus of your Starfire, Moonfire and Wrath by ', '%.'], 5, [[20, 40, 60, 80, 100]], [{ x: 1, y: 1 }]),
  new Talent(
    'Improved Starfire',
    'spell_arcane_starfire',
    ['Reduces the cast time of your Starfire by ', ' sec and gives you Starfire a ', '% chance to stun the target for 3 sec.'],
    2,
    [
      [0.25, 0.5],
      [8, 15],
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
  null,
]

export default tier4
