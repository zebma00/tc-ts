import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Blessed Weapons',
    'inv_sword_25',
    ['Increases the damage you deal with two-handed melee weapons by ', '%. In addition, increases your spell damage and healng by ', '% of your attack power.'],
    3,
    [
      [2, 4, 6],
      [10, 20, 30],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
  new Talent(
    'Seal of Command',
    'ability_warrior_innerrage',
    [
      <>
        Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage. Only one seal can be active on the paladin at a time. Lasts 30 sec. <br />
        <br /> Unleashing this Seal's energy will Judge an enemy, instantly causing 68 to 73 Holy damage, 137 to 146 if the target is stunned or incapacitated.
      </>,
    ],
    1,
    [[]],
    null,
    null,
    '65 Mana',
    null,
    'Instant',
    null,
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  new Talent('Crusade', 'spell_holy_crusade', ['Your Judgement of any seal has a ', '% chance to apply Judgement of the Crusader in addition to its usual effect.'], 2, [[50, 100]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier5
