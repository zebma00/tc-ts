import { Talent } from '../../Classes'

const tier3 = [
  new Talent(
    'Devotion',
    'spell_shadow_focusedpower',
    ['Increases the duration and reduces the cooldown of your Priest racial abilities by ', '%.'],
    2,
    [[10, 20]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    'Inner Focus',
    'spell_frost_windwalkon',
    ['When activated, reduces the mana cost of your next spell by 100% and increases its critical strike chance by 25%.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    'Instant',
    '3 min cooldown'
  ),
  new Talent(
    'Meditation',
    'spell_nature_sleep',
    ['Allows ', '% of your mana regeneration to continue while casting.'],
    3,
    [[5, 10, 15]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
]

export default tier3
