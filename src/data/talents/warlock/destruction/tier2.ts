import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Improved Firebolt', 'spell_fire_firebolt', ["Reduces the Cast Time of your Imp's Fire Bolt by ", ' sec.'], 2, [[0.5, 1]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
  new Talent('Bane', 'spell_shadow_deathpact', ['Reduces the casting time of your Shadow Bolt and Immolate spells by ', ' sec and your Soul Fire spell by ', ' sec.'], 5, [
    [0.1, 0.2, 0.3, 0.4, 0.5],
    [0.4, 0.8, 1.2, 1.6, 2],
  ]),
  new Talent('Aftermath', 'spell_fire_fire', ['Gives your Destruction spells a ', '% chance to daze the target for 5 sec.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent('Improved Lash of Pain', 'spell_shadow_curse', ["Reduces the cooldown of your Succubus' and Incubus' Lash of Pain by ", ' sec.'], 2, [[5, 10]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
]

export default tier2
