import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Improved Berserker Rage', 'spell_nature_ancestralguardian', ['Causes your Berserker Rage to generate ', ' rage when used.'], 2, [[5, 10]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: false,
    isMoved: true,
  }),
  new Talent('Improved Demoralizing Shout', 'ability_warrior_warcry', ['Increases the melee attack power reduction of Demoralizing Shout by ', '%.'], 5, [[18, 16, 24, 32, 40]]),
  new Talent('Unbridled Wrath', 'spell_nature_stoneclawtotem', ['Gives you a ', '% chance to gain an additional Rage point when dealing damage with melee weapons.'], 5, [[8, 16, 24, 32, 40]]),
  new Talent('Victorious Surge', 'spell_nature_shamanrage', ['Gives you a ', '% chance to gain 10% health after killing an opponent that yields experience or honor.'], 2, [[50, 100]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier2
