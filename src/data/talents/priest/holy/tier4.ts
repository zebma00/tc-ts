import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier4 = [
  null,
  new Talent(
    'Holy Reach',
    'spell_holy_purify',
    ['ncreases the range of Smite and Holy Fire and the radius of Holy Nova and Prayer of Healing by ', '%.'],
    2,
    [[10, 20]]
  ),
  new Talent(
    'Spiritual Guidance',
    'spell_holy_spiritualguidence',
    ['Increases healing and spell damage by ', '% of your total Spirit.'],
    5,
    [[3, 6, 9, 12, 15]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  null,
=======
export default [
	null,
	new Talent(
		'Holy Reach',
		'spell_holy_purify',
		['ncreases the range of Smite and Holy Fire and the radius of Holy Nova and Prayer of Healing by ', '%.'],
		2,
		[[10, 20]]
	),
	new Talent(
		'Improved Healing',
		'spell_holy_heal02',
		['Reduces the mana cost of your Lesser Heal, Heal and Greater Heal spells by ', '%.'],
		3,
		[[5, 10, 15]]
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier4
