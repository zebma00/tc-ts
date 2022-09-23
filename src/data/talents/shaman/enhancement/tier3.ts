import { Talent } from '../../Classes'

const tier3 = [
  new Talent('Enhancing Totems', 'spell_nature_earthbindtotem', ['Increases the effect of your Grace of Air and Strength of Earth Totems by ', '%'], 2, [[8, 15]]),
  null,
  new Talent(
    'Totemic Fury',
    'spell_fire_totemofwrath',
    ['Your critical strikes with melee attacks increase the effect of your totems that affect friendly targets by 20% for 8 sec and reduce the cooldown of your totems that are on cooldown by 1 sec.'],
    1,
    [[]],
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
  new Talent('Anticipation', 'spell_nature_mirrorimage', ['Reduces your damage taken by ', '%.'], 3, [[1, 2, 3]], null, null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: false,
  }),
]

export default tier3
