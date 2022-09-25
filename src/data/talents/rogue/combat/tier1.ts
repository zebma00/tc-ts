import { Talent } from '../../Classes'

const tier1 = [
  new Talent('Improved Gouge', 'ability_gouge', ['Increases the duration of your Gouge ability by ', ' sec.'], 3, [[0.5, 1, 1.5]]),
  new Talent('Improved Sinister Strike', 'spell_shadow_ritualofsacrifice', ['Reduces the energy cost of your Sinister Strike ', '.'], 2, [[3, 5]]),
  new Talent('Lightning Reflexes', 'spell_nature_invisibilty', ['Increases your dodge chance by ', '%.'], 3, [[2, 4, 6]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
  null,
]

export default tier1
