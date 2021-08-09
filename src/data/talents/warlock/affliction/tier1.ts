import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Suppression', 'natures-grasp', ['Reduces the chance for enemies to resist your Affliction spells by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  new Talent('Improved Corruption', 'natures-grasp', ['Reduces the cast time of your Corruption spell by ', 'sec.'], 5, [[0.4, 0.8, 1.2, 1.6, 2]]),
  null,
]
