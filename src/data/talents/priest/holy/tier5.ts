import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier5 = [
  new Talent(
    'Radiant Healing',
    'spell_holy_prayerofhealing02',
    ['Reduces the Mana cost and increases the effect of your Prayer of Healing and Holy Nova spells by ', '%.'],
    2,
    [[10, 20]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    'Spirit of Redemption',
    'inv_enchant_essenceeternallarge',
    [
      'Increases your spirit by 5%. Upon death, the priest becomes the Spirit of Redemption for 10 sec. The Spirit of Redemption cannot attack, be attacked or targeted or move. While in this form the priest can cast any healing spells free of cost. When the effect ends, the priest dies.',
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2'],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    'Improved Healing',
    'spell_holy_heal02',
    ['Reduces the mana cost of your Lesser Heal, Heal and Greater Heal spells by ', '%.'],
    3,
    [[5, 10, 15]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  null,
=======
export default [
	new Talent(
		'Improved Prayer of Healing',
		'spell_holy_prayerofhealing02',
		['Reduces the Mana cost of your Prayer of Healing spell by ', '%.'],
		2,
		[[10, 20]]
	),
	new Talent(
		'Spirit of Redemption',
		'inv_enchant_essenceeternallarge',
		[
			'Increases your spirit by 5%. Upon death, the priest becomes the Spirit of Redemption for 10 sec. The Spirit of Redemption cannot attack, be attacked or targeted or move. While in this form the priest can cast any healing spells free of cost. When the effect ends, the priest dies.',
		],
		1,
		[[]],
		[{ x: null, y: null }],
		[{ x: 6, y: 1 }],
		null,
		null,
		null,
		null,
		['D2']
	),
	new Talent(
		'Surge of Light',
		'spell_holy_surgeoflight',
		[
			'Your offensive spell criticals have a ',
			'% chance to heal a nearby party or raid member with low health by 30% of the damage dealt.',
		],
		2,
		[[25, 50]],
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
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier5
