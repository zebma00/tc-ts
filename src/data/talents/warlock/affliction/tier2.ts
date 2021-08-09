import { Talent } from '../../Classes'

export default [
  new Talent('Improved Curse of Weakness', 'entangling-roots', ['Increases the effect of your Curse of Weakness by ', '%.'], 2, [[15, 30]]),
  new Talent(
    'Improved Drain Soul',
    'moonfire',
    [
      'Gives you a ',
      '% chance to increase your Mana regeneration by 100% for 10 sec if the target is killed while you drain its soul. In addition your Mana may regenerate while casting at a 50% rate.',
    ],
    2,
    [[50, 100]]
  ),
  new Talent('Improved Life Tap', 'natural-weapons', ['Increases the amount of mana rewarded by your Life Tap spell by ', '%.'], 2, [[10, 20]]),
  new Talent(
    'Improved Drain Life',
    'arcane-explosion',
    [
      'Increases the amount drained by your Drain Life spell by an additional ',
      '% for each Affliction effect on the target, up to a maximum of 60% additional effect.',
    ],
    2,
    [[3, 6]]
  ),
]
