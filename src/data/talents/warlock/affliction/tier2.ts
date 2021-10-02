import { Talent } from '../../Classes'

export default [
  new Talent('Improved Curse of Weakness', 'spell_shadow_curseofmannoroth', ['Increases the effect of your Curse of Weakness by ', '%.'], 2, [
    [15, 30],
  ]),
  new Talent(
    'Improved Drain Soul',
    'spell_shadow_haunting',
    [
      'Gives you a ',
      '% chance to increase your Mana regeneration by 100% for 10 sec if the target is killed while you drain its soul. In addition your Mana may regenerate while casting at a 50% rate.',
    ],
    2,
    [[50, 100]]
  ),
  new Talent('Improved Life Tap', 'spell_shadow_burningspirit', ['Increases the amount of mana rewarded by your Life Tap spell by ', '%.'], 2, [
    [10, 20],
  ]),
  new Talent(
    'Improved Drain Life',
    'spell_shadow_lifedrain02',
    [
      'Increases the amount drained by your Drain Life spell by an additional ',
      '% for each Affliction effect on the target, up to a maximum of 60% additional effect.',
    ],
    5,
    [[2, 4, 6, 8, 10]]
  ),
]
