import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Savage Fury', 'ability_druid_ravage', ['Increases the damage caused by your Claw, Rake, Maul and Swipe abilites by ', '%.'], 2, [[10, 20]]),
  null,
  new Talent('Frenzy', 'ability_druid_primaltenacity', ['Increases your energy regeneration in Cat Form and your Rage regeneration in Bear and Dire Bear Form by 100% for 15 sec.'], 1, [[]], null, null, 'Instant', '5 min cooldown', null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
]

export default tier5
