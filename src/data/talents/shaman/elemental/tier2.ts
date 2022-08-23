import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    "Earth's Grasp",
    'spell_nature_stoneclawtotem',
    ['Increases the health of your Stoneclaw Totem by ', '% and the radius of your Earthbind Totem by ', '%.'],
    2,
    [
      [25, 50],
      [20, 40],
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
  new Talent('Spiritual Warding', 'spell_nature_spiritarmor', ['Reduces the damage taken from Frost, Fire and Nature spells and effects by ', '%.'], 3, [[4, 7, 10]]),
  new Talent('Call of Flame', 'spell_fire_immolation', ['Increases damage done by your Fire Totems by ', '%'], 3, [[5, 10, 15]]),
  new Talent(
    'Storm and Thunder',
    'spell_shaman_staticshock',
    ['Your Lightning spells increase the critical strike chance of all attacks and spells made against the target by ', '%. Lasts 12 sec.'],
    3,
    [[1, 2, 3]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
]

export default tier2
