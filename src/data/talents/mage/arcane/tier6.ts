import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Arcane Instability',
    'arcane-instability',
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
    'unstable-missiles',
    ['Increases the damage, critical strike chance and mana cost of your Arcane Missiles by ', '%.'],
    5,
    [[3, 6, 9, 12, 15]]
  ),
  null,
]
