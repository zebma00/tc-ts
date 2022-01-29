import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier3 = [
  new Talent(
    'Shadowburn',
    'spell_shadow_scourgebuild',
    ['Reagents: Soul Shard. Instantly blasts the target for 91 to 104 shadow damage. If the target dies within 5 sec and yields experience or honor, gain a Soul Shard.'],
    1,
    [[]],
    null,
    null,
    '105 Mana',
    '20 yd range',
    'Instant',
    '15 sec cooldown'
  ),
  new Talent(
    'Havoc',
    'spell_fire_playingwithfire',
    ['Critical strikes from your Fire spells increase Fire damage damage taken by the target by ', '% for 5 sec.'],
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
  new Talent(
    'Devastation',
    'spell_fire_flameshock',
    ['Increases the critical strike chance of your Destruction spells by ', '%.'],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
=======
export default [
	new Talent(
		'Improved Firebolt',
		'spell_fire_firebolt',
		["Reduces the Cast Time of your Imp's Fire Bolt by ", ' sec.'],
		2,
		[[0.5, 1]]
	),
	new Talent(
		'Improved Lash of Pain',
		'spell_shadow_curse',
		["Reduces the cooldown of your Succubus' Lash of Pain by ", ' sec.'],
		2,
		[[3, 6]]
	),
	new Talent(
		'Devastation',
		'spell_fire_flameshock',
		['Increases the critical strike chance of your Destruction spells by ', '%.'],
		5,
		[[1, 2, 3, 4, 5]],
		[{ x: null, y: null }],
		[{ x: 4, y: 2 }],
		null,
		null,
		null,
		null,
		['D2']
	),
	new Talent(
		'Shadowburn',
		'spell_shadow_scourgebuild',
		[
			'Reagents: Soul Shard. Instantly blasts the target for 91 to 104 shadow damage. If the target dies within 5 sec and yields experience or honor, gain a Soul Shard.',
		],
		1,
		[[]],
		null,
		null,
		'105 Mana',
		'20 yd range',
		'Instant',
		'15 sec cooldown'
	),
>>>>>>> 1ddb4f1 (patch notes)
]

export default tier3
