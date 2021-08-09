import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Lightwell',
    'spell_holy_summonlightwell',
    [
      'Creates a holy Lightwell at target location. Members of your party can move through it to restore 800 health over 4 sec. Each party member can only be healed by the Lightwell once.',
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    '225 Mana',
    null,
    '1.5 sec cast',
    '5 min cooldown'
  ),
  null,
  null,
]
