import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Devotion',
    'spell_holy_unyieldingfaith',
    [
      <>Critical strikes from your heals have a </>,
      <>
        % chance to heal the target for 30% of the healing done over 4 sec. <br />
        <br />
        Critical strikes from your damaging spells have a{' '}
      </>,
      <>% chance to deal Holy damage equal to 30% of the damage done over 4 sec.</>,
    ],
    2,
    [
      [50, 100],
      [50, 100],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isMoved: false, isChanged: false }
  ),
  null,
  new Talent(
    'Force of Will',
    'spell_nature_slowingtotem',
    ['Increases the critical strike chance of your offensive spells by ', '% and your spell damage by ', '%.'],
    3,
    [
      [2, 4, 6],
      [2, 4, 6],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  null,
]

export default tier6
