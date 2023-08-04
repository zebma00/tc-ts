import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Vindication', 'spell_holy_vindication', ["Gives the Paladin's damaging melee attacks a chance to reduce the target's attributes by ", '% for 10 sec.'], 3, [[5, 10, 15]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  new Talent('Conviction', 'spell_holy_retributionaura', ['Increases your chance to get a critical strike with Melee weapons by ', '%.'], 5, [[1, 2, 3, 4, 5]], [{ x: null, y: null }], [{ x: 5, y: 1 }], null, null, null, null, ['D3']),
  new Talent('Sacred Seals', 'spell_holy_holyprotection', ['Increases the effect of your Seals by 10% and reduces the chance your Seals are dispelled by 100%.'], 1, [[]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  new Talent('Pursuit of Justice', 'spell_holy_persuitofjustice', ['Increases movement speed and mounted movement speed by ', '%. Does not stack with other movement increasing effects.'], 2, [[4, 8]]),
]

export default tier3
