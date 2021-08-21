import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    "Improved Hunter's Mark",
    'ability_hunter_snipershot',
    ['Causes ', "% of your Hunter's Mark ability to apply to melee attack power as well."],
    5,
    [[20, 40, 60, 80, 100]]
  ),
  new Talent('Improved Concussive Shot', 'spell_frost_stun', ['Gives your Concussive Shot a ', '% chance to stun the target for 3 sec.'], 5, [
    [4, 8, 12, 16, 20],
  ]),
  null,
]
