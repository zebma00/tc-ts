import { Talent } from '../../Classes'

export default [
    new Talent(
    'Molten Blood',
    'spell_fire_moltenblood',
    [
      'After being hit by a melee or ranged critical strike, deal fire damage equal to ',
      "% of the damage taken to the attacker. The damage caused by Molten Blood will not exceed more than 50% of the mage's total health. This damage causes no threat.",
    ],
    2,
    [[15, 30]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true,
      isChanged: false,
      isMoved: false
    }
  ),
  new Talent(
    'Critical Mass',
    'spell_nature_wispheal',
    ['Increases the critical strike chance of your Fire spells by ', '%.'],
    3,
    [[2, 4, 6]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent(
    'Blast Wave',
    'spell_holy_excorcism_02',
    [
      'A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for 160 to 192 Fire damage, and dazing them for 6 sec',
    ],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    null,
    '215 Mana',
    null,
    'Instant',
    '45 sec cooldown'
  ),
  null,
]
