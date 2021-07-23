import { Talent } from '../../Classes'

export default [
  new Talent('Ruthlessness', 'ruthlessness', ['Gives your finishing moves a ', '% chance to add a combo point to the target.'], 3, [[20, 40, 60]]),
  new Talent('Murder', 'murder', ['Increases all damage done to Humanoid, Dragonkin, Beast and Giant targets by ', '%.'], 2, [[1, 2]]),
  null,
  new Talent('Improved Slice and Dice', 'slice-and-dice', ['Increases the duration of your Slice and Dice by ', '%.'], 3, [[15, 30, 45]]),
]
