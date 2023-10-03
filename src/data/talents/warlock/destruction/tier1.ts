import { Talent } from '../../Classes'

const tier1 = [
  null,
  new Talent('Improved Shadow Bolt', 'spell_shadow_shadowbolt', ['Your Shadow Bolt critical strikes increase the shadow damage taken by the target by ', '% until 4 non-periodic damage sources are applied. Lasts a maximum of 12 sec.'], 5, [
    [4, 8, 12, 16, 20],
  ]),
  new Talent('Catactlysm', 'spell_fire_windsofwoe', ['Reduces the mana cost of your Destruction spells by ', '%.'], 5, [[2, 4, 6, 8, 10]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  null,
]

export default tier1
