import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier6 = [
  new Talent(
    'Static Charge',
    'spell_shaman_staticshock',
    ['Your Lightning spells increase the critical strike chance of all spells made against the target by ', '%. This effect lasts 12 sec.'],
    3,
    [[1, 2, 3]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
  new Talent(
    'Lightning Mastery',
    'spell_lightning_lightningbolt01',
    ['Reduces the cast time of your Lightning Bolt and Chain Lightning spells by ', ' sec.'],
    2,
    [[0.5, 1]],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
=======
export default [
	null,
	null,
	new Talent(
		'Unleashed Elements',
		'spell_nature_elementalprecision_1',
		[
			"Causes your critical hits from spells to increase all party members' casting speed by ",
			'% if within 20 yards of the Shaman. Lasts 10 sec.',
		],
		5,
		[[2, 4, 6, 8, 10]],
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

export default tier6
