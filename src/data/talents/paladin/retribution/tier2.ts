import { Talent } from '../../Classes'

const tier2 = [
  new Talent('Improved Judgement', 'spell_holy_righteousfury', ['Decreases the cooldown of your Judgement spell by ', ' sec.'], 2, [[1, 2]]),
  new Talent('Crusade', 'spell_holy_crusade', ['Your Judgement of any seal has a ', '% chance to apply Judgement of the Crusader in addition to its usual effect.'], 2, [[50, 100]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent('Deflection', 'ability_parry', ['Increases your parry chance by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  null,
]

export default tier2
