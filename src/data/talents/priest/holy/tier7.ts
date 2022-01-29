import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier7 = [
  null,
  new Talent(
    'Lightwell',
    'spell_holy_summonlightwell',
    [
      'Creates a holy Lightwell on the target location. The Lightwell heals a nearby party member for 330 every 2 sec. Lightwell prioritizes party members with low health. Lightwell is indestructible and lasts 12 seconds.',
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    '225 Mana',
    '30 yd range',
    'Instant cast',
    '2 min cooldown',
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  null,
  null,
=======
export default [
	null,
	new Talent(
		'Lightwell',
		'spell_holy_summonlightwell',
		[
			'Creates a holy Lightwell on the target location. The Lightwell lasts heals a nearby party member with low health for 330 every 2 sec. Lightwell lasts 12 seconds.',
		],
		1,
		[[]],
		[{ x: 4, y: 1 }],
		null,
		'225 Mana',
		'30 yd range',
		'1.5 sec cast',
		'2 min cooldown',
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
