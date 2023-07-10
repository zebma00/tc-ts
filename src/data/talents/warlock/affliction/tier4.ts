import { Talent } from '../../Classes'

const tier4 = [
  new Talent('Grim Reach', 'spell_shadow_callofbone', ['Increases the range of your Affliction spells by ', '%.'], 2, [[10, 20]]),
  new Talent(
    'Nightfall',
    'spell_shadow_twilight',
    ['Gives your Corruption and Drain Life spells a ', '% chance to cause you to enter a Shadow Trance state after damaging an opponent. The Shadow Trance state reduces the casting time of your next Shadow Bolt spell by 100%.'],
    2,
    [[2, 4]]
  ),
  null,
  new Talent('Eradication', 'ability_creature_cursed_03', ['Increases the damage of your damage over time effects on targets below 30% health by ', '%.'], 3, [[10, 20, 30]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier4
