import { Talent } from '../../Classes'

const tier3 = [
  new Talent(
    'Elemental Focus',
    'spell_shadow_manaburn',
    ['After landing a critical strike with a Fire, Frost or Nature damage spell, you enter a Clearcasting state. The Clearcasting state reduces the mana cost of your next damage spell by 100%.'],
    1,
    [[]]
  ),
  new Talent('Reverberation', 'spell_frost_frostward', ['Reduces the cooldown of your Shock spells by ', ' sec.'], 5, [[0.2, 0.4, 0.6, 0.8, 1]]),
  new Talent(
    'Call of Thunder',
    'spell_nature_callstorm',
    ['Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional ', '%.'],
    3,
    [[2, 4, 6]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ['D3'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
]

export default tier3
