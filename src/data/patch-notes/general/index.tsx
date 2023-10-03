import world from './general/world'
// import badgeOfJustice from './general/badge-of-justice'
import heroic from './general/heroic'
import serverBalance from './general/server-balance'
import worldBuffs from './general/world-buffs'
import miscellaneous from './general/miscellaneous'

export default {
  title: 'General',
  note: 'Note TBD; based on classic HC (not SoM)',
  content: [world, heroic, serverBalance, worldBuffs, miscellaneous],
}
