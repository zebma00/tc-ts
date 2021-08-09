import { Talent } from '../../Classes'

export default [
  new Talent('Improved Health Stone', 'ferocity', ['Increases the amount of health restored by your Healthstone by ', '%.'], 2, [[10, 20]]),
  new Talent('Improved Imp', 'ferocity', ["Increases the effect of your Imp's Firebolt, Fire Shield and Blood Pact by ", '%.'], 3, [[10, 20, 30]]),
  new Talent('Demonic Embrace', 'demoralizing-roar', ['Increases your stamina by ', '% but reduces your spirit by ', '%.'], 5, [
    [3, 6, 9, 12, 15],
    [1, 2, 3, 4, 5],
  ]),
  null,
]
