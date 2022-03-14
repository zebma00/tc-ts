import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    "Nature's Guidance",
    'spell_frost_stun',
    ['Increases your chance to hit with melee attacks and spells by ', '%.'],
    3,
    [[1, 2, 3]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  new Talent(
    'Ancestral Healing',
    'spell_nature_undyingstrength',
    ['Increases your targets armor value by ', '% for 15 sec after getting a critical effect from one of your healing spells.'],
    3,
    [[8, 16, 25]]
  ),
  new Talent('Totemic Focus', 'spell_nature_moonglow', ['Reduces the mana cost of your totems by ', '%.'], 5, [[5, 10, 15, 20, 25]]),
  new Talent(
    'Spiritual Blessing',
    'spell_nature_natureblessing',
    ['Increases your healing received by ', '%.'],
    2,
    [[5, 10]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier2
