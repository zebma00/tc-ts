import { Talent } from '../../Classes'

const tier3 = [
  new Talent(
    'Elemental Focus',
    'spell_shadow_manaburn',
    ['After landing a critical strike with a Fire, Frost or Nature damage spell, you enter a Clearcasting state. The Clearcasting state reduces the mana cost of your next 2 damage spells by 40%.'],
    1,
    [[]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent('Reverberation', 'spell_frost_frostward', ['Reduces the cooldown of your Shock spells by ', ' sec.'], 5, [[0.1, 0.2, 0.3, 0.4, 0.5]]),
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
  new Talent(
    'Elemental Devastation',
    'classic_spell_fire_elementaldevastation',
    ['Causes your offensive spell crits to increase your chance to get a critical strike with melee attacks by ', '% for 10 sec.'],
    3,
    [[3, 6, 9]],
    null,
    [{ x: 3, y: 3 }],
    null,
    null,
    null,
    null,
    ['D1'],
    { isNew: false, isChanged: false, isMoved: true }
  ),
]

export default tier3
