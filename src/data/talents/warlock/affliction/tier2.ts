import { Talent } from '../../Classes'

const tier2 = [
  new Talent(
    'Soul Siphon',
    'spell_shadow_lifedrain02',
    ['Increases the amount drained by your Drain Life and Drain Mana spells by an additional ', '% for each Affliction effect on the target, up to a maximum of 60% additional effect.'],
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
    'Improved Drain Soul',
    'spell_shadow_haunting',
    ['Gives you a ', '% chance to increase your Mana regeneration by 100% for 10 sec if the target is killed while you drain its soul. In addition your Mana may regenerate while casting at a 50% rate.'],
    2,
    [[50, 100]]
  ),
  new Talent('Improved Life Tap', 'spell_shadow_burningspirit', ['Increases the amount of mana rewarded by your Life Tap spell by ', '%.'], 2, [[10, 20]]),
  new Talent('Malediction', 'spell_shadow_curseofachimonde', ['Increases the damage bonus effect of your Curse of the Elements and Curse of Shadows by ', '%.'], 3, [[1, 2, 3]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier2
