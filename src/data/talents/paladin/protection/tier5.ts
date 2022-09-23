import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Blessed Soul', 'spell_holy_holyprotection', ['Allows two auras to be active at the same time.'], 1, [[]], null, null, null, null, null, null, null, {
    isMoved: false,
    isChanged: false,
    isNew: true,
  }),
  new Talent(
    'Blessing of Protection',
    'spell_nature_lightningshield',
    [
      'Places a Blessing on the friendly target, reducing damage dealt from all sources by up to 10 for 5 min. In addition, when the target blocks a melee attack the attacker will take 14 Holy damage. Players may only have one Blessing on them per Paladin at any one time.',
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    '60 Mana',
    '30 yd range',
    'Instant',
    null,
    ['D2']
  ),
  new Talent(
    'Reckoning',
    'spell_holy_blessingofstrength',
    ['Gives you a ', '% chance after being hit by any damaging attack or spell that the next 4 weapon swings within 8 sec will generate an additional attack.'],
    5,
    [[2, 4, 6, 8, 10]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
]

export default tier5
