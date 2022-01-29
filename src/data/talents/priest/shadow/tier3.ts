import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier3 = [
  null,
  new Talent('Improved Mind Blast', 'spell_shadow_unholyfrenzy', ['Reduces the cooldown of your Mind Blast by ', ' sec.'], 5, [[0.5, 1, 1.5, 2, 2.5]]),
  new Talent(
    'Mind Flay',
    'spell_shadow_siphonmana',
    ["Assault the target's mind with Shadow energy, causing 75 Shadow damage over 3 sec and slowing their movement speed by 50%."],
    1,
    [[]],
    null,
    null,
    '45 Mana',
    '20 yd range',
    'Channeled (3 sec cast)'
  ),
  new Talent('Misery', 'spell_shadow_misery', ['Your Shadow Word: Pain also causes the target to take an additional ', '% spell damage.'], 3, [[1, 2, 3]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
=======
export default [
	null,
	new Talent(
		'Improved Mind Blast',
		'spell_shadow_unholyfrenzy',
		['Reduces the cooldown of your Mind Blast by ', ' sec.'],
		5,
		[[0.5, 1, 1.5, 2, 2.5]]
	),
	new Talent(
		'Mind Flay',
		'spell_shadow_siphonmana',
		[
			"Assault the target's mind with Shadow energy, causing 75 Shadow damage over 3 sec and slowing their movement speed by 50%.",
		],
		1,
		[[]],
		null,
		null,
		'45 Mana',
		'20 yd range',
		'Channeled (3 sec cast)'
	),
	null,
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier3
