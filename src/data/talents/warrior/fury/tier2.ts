import { Talent } from '../../Classes'

const tier2 = [
  null,
  new Talent(
    'Improved Demoralizing Shout',
    'ability_warrior_warcry',
    ['Increases the melee attack power reduction of Demoralizing Shout by ', '%.'],
    5,
    [[18, 16, 24, 32, 40]]
  ),
  new Talent(
    'Unbridled Wrath',
    'spell_nature_stoneclawtotem',
    ['Gives you a ', '% chance to gain an additional Rage point when dealing damage with melee weapons.'],
    5,
    [[8, 16, 24, 32, 40]]
  ),
  null,
]

export default tier2
