import { Talent } from '../../Classes'

export default [
  new Talent(
    "Earth's Grasp",
    'spell_nature_stoneclawtotem',
    ['Increases the health of your Stoneclaw Totem by ', '% and the radius of your Earthbind Totem by ', '%.'],
    2,
    [
      [25, 50],
      [10, 20],
    ]
  ),
  new Talent('Call of Flame', 'spell_fire_immolation', ['Increases damage done by your Fire spells, effects and totems by ', '% and increases their critical strike chance by ', '%.'], 3, [[4, 7, 10], [1, 2, 3]),
    new Talent(
    'Elemental Devastation',
    'classic_spell_fire_elementaldevastation',
    ['Causes your critical strikes from spells to increase your chance to get a critical strike with melee attacks by ', '% for 10 sec.'],
    3,
    [[3, 6, 9]]
  ),
  null,
]
