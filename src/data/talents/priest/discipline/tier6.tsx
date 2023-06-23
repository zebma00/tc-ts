import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Reverence',
    'ability_racial_avatar',
    [
      <>
        Improves one of your Priest racial abilities. <br />
        <br /> Human: the mana burned by Feedback by{' '}
      </>,
      <>
        {' '}
        min. <br />
        <br />
        Dwarf: Increases the damage of Chastise by{' '}
      </>,
      <>
        %. <br />
        <br />
        Night Elf: Reduces the cast time of Starshards by{' '}
      </>,
      <>
        {' '}
        sec. <br />
        <br />
        Troll: Inreases the number of Shadowguard orbs by{' '}
      </>,
      <>
        . <br />
        <br />
        Undead: Reduces the cooldown of Devouring Plague by{' '}
      </>,
      <> sec.</>,
    ],
    2,
    [
      [25, 50],
      [15, 30],
      [0.5, 1],
      [2, 4],
      [3, 6],
    ],
    [{ x: 4, y: 0 }],
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
