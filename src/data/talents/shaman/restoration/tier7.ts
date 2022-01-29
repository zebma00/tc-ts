import { Talent } from '../../Classes'

<<<<<<< HEAD
const tier7 = [
  null,
  new Talent(
    'Torrent Totem',
    'ability_shaman_multitotemactivation',
    [
      "Summons a Torrent Totem at the feet of the caster with health equal to 20% of the Shaman's health for 12 sec that restores 170 mana and health to all party members within 20 yards every 3 sec.",
    ],
    1,
    [[1]],
    [{ x: 3, y: 1 }],
    null,
    '20 Mana',
    null,
    'Instant',
    '5 min cooldown',
    null,
    { isChanged: false, isMoved: false, isNew: true }
  ),
  null,
  null,
=======
export default [
	null,
	new Talent(
		'Torrent Totem',
		'spell_frost_summonwaterelemental',
		[
			"Summons a torrent totem at the feet of the caster with health equal to 20% of the shaman's for 12 sec. The torrent totem restores 170 health and mana to all party members within 20 yards every 3 sec.",
		],
		1,
		[[1]],
		[{ x: 3, y: 1 }],
		null,
		'20 Mana',
		null,
		'Instant',
		'5 min cooldown',
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
