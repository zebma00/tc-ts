import { Talent } from '../../Classes'

export default [
  new Talent('Improved Eviscerate', 'ability_rogue_eviscerate', ['Increases the damage done by your Eviscerate ability by ', ' %.'], 3, [
    [5, 10, 15],
  ]),
  new Talent(
    'Remorseless Attacks',
    'ability_fiegndead',
    [
      'After an enemy that yields experience or honor is killed while effected by one of your poisons, you gain ',
      '% increased critical strike chance on your next Sinister Strike, Backstab, Ambush or Ghostly Strike. Lasts 20 sec.',
    ],
    2,
    [[15, 30]]
  ),
  new Talent(
    'Malice',
    'ability_racial_bloodrage',
    ['Increases your critical strike chance by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]
