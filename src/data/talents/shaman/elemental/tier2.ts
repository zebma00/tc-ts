import { Talent } from '../../Classes'

export default [
  new Talent(
    "Earth's Grasp",
    'earths-grasp',
    ['Increases the health of your Stoneclaw Totem by ', '% and the radius of your Earthbind Totem by ', '%.'],
    2,
    [
      [25, 50],
      [10, 20],
    ]
  ),
  new Talent('Call of Flame', 'immolate', ['Increases the damage done by your Fire Totems by ', '%.'], 2, [[10, 20]]),
  new Talent('Aftershock', 'aftershock', ['Increases the critical strike chance of your Shock spells by ', '%.'], 2, [[2, 4]]),
  null,
]
