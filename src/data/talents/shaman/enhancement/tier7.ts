import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier7 = [
  null,
  new Talent(
    'Stormstrike',
    'spell_holy_sealofmight',
    ['Gives you an extra attack. In addition, increases nature damage dealt to the target by 10%. Lasts 20 sec.'],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    '21% of base mana',
    'Melee range',
    'Instant',
    '20 sec cooldown',
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
  null,
=======
export default [
	null,
	new Talent(
		'Stormstrike',
		'spell_holy_sealofmight',
		[
			'Gives you an extra attack that deals nature damage and increases nature damage taken by the target by 10% for 12 seconds.',
		],
		1,
		[[]],
		[{ x: 4, y: 1 }],
		null,
		'21% of base mana',
		'Melee range',
		'Instant',
		'12 sec cooldown',
		null,
		{
			isNew: false,
			isChanged: true,
			isMoved: false,
		}
	),
	null,
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier7
