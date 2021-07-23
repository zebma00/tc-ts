import { Talent } from '../../Classes'

export default [
  new Talent('Improved Gouge', 'gouge', ['Increases the duration of your Gouge ability by ', ' sec.'], 3, [[0.5, 1, 1.5]]),
  new Talent('Improved Sinister Strike', 'sinister-strike', ['Reduces the energy cost of your Sinister Strike ', '.'], 2, [[3, 5]]),
  new Talent('Lightning Reflexes', 'lightning-reflexes', ['Increases your dodge chance by ', '%.'], 5, [[1, 2, 3, 4, 5]]),
  null,
]
