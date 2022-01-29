import battlegrounds from './pvp-content/battlegrounds'
import honorSystem from './pvp-content/honor-system'
<<<<<<< HEAD

export default {
  title: 'PvP content',
  note: 'While many players enjoy the classic honor system and are quite attached to it, to others it can feel discouraging. There should be alternatives to both gaining honor and acquiring strong PvP gear.',
  content: [honorSystem, battlegrounds],
=======
import worldPvp from './pvp-content/world-pvp'

export default {
	title: 'PvP content',
	note: 'While many players enjoy the classic honor system and are quite attached to it, to others it can feel discouraging. There should be alternatives to both gaining honor and acquiring strong PvP gear.',
	content: [honorSystem, battlegrounds, worldPvp],
>>>>>>> 1ddb4f1 (patch notes)
}
