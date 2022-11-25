import { Talent } from '../../Classes'

const tier6 = [
  null,
  new Talent(
    'Arcane Instability',
    'spell_shadow_teleport',
    ['Increases your spell damage and critical strike chance by ', '%.'],
    3,
    [[1, 2, 3]],
    [{ x: 4, y: 1 }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent(
    'Unstable Missiles',
    'spell_arcane_starfire',
    ['Casting Arcane Missiles reduces the casting time and increases the Mana cost of your Arcane Missiles by ', '%. This effect stacks up to 5 times and lasts 8 sec.'],
    2,
    [[5, 10]],
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
  null,
]

export default tier6
