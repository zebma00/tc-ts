import { Talent } from '../../Classes'

const tier1 = [
  null,
  new Talent('Improved Blessing of Might', 'spell_holy_fistofjustice', ['Increases the effect of your Blessing of Might by ', '%.'], 5, [
    [4, 8, 12, 16.2],
  ]),
  new Talent('Benediction', 'spell_frost_windwalkon', ['Decreases the Mana cost of your Judgement and Seal spells by ', '%.'], 5, [
    [3, 6, 9, 12, 15],
  ]),
  null,
]

export default tier1
