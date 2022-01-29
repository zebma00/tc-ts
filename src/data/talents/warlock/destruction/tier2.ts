import { Talent } from '../../Classes'

export default [
  null,
  new Talent(
    'Improved Shadow Bolt',
    'spell_shadow_shadowbolt',
    [
      'Your Shadow Bolt critical strikes increase the shadow damage taken by the target by ',
      '% until 4 non-periodic damage sources are applied. Lasts a maximum of 12 sec.',
    ],
    5,
    [[4, 8, 12, 16, 20]], null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true
    }
  ),
  new Talent('Aftermath', 'spell_fire_fire', ['Gives your Destruction spells a ', '% chance to daze the target for 5 sec.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]
