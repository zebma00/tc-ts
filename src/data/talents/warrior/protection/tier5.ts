import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Improved Shield Wall', 'ability_warrior_shieldwall', ['Increases the duration of your Shield Wall by ', ' sec.'], 2, [[3, 5]]),
  new Talent('Concussion Blow', 'ability_thunderbolt', ['Stuns the target for 5 sec.'], 1, [[]]),
  new Talent('Improved Shield Bash', 'ability_warrior_shieldbash', ['Gives your Shield Bash a ', '% chance to silence the target for 2 sec.'], 2, [[50, 100]]),
  new Talent('Ignore Pain', 'ability_warrior_focusedrage', ['Removes all movement impairing effects and all effects which cause loss of control of your character.'], 1, [[]], null, null, null, null, 'Instant cast', '5 min cooldown', null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier5
