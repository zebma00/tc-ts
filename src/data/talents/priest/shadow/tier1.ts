import { Talent } from '../../Classes'

export default [
  null,
    new Talent('Shadow Focus', 'spell_shadow_burningspirit', ["Reduces the target's chance to resist your Shadow spells ", '%.'], 5, [
    [2, 4, 6, 8, 10],
  ]),
  new Talent('Blackout', 'spell_shadow_gathershadows', ['Your Shadow spells have a .', '% chance to stun the target for 3 sec.'], 5, [
    [2, 4, 6, 8, 10],
  ]),
  null,
]
