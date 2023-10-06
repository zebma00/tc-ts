import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Devotion',
    'ability_racial_avatar',
    [
      <>
        Improves one of your Priest racial abilities. <br />
        <br /> Human: You gain{' '}
      </>,
      <>
        % of the mana and health burned by your Feedback. <br />
        <br />
        Dwarf: Your Chastice increases the next source of direct spell damage to the target by{' '}
      </>,
      <>
        %. <br />
        <br />
        Night Elf: Your Starfall has a{' '}
      </>,
      <>
        % chance to stun the target for 4 sec after the last tick.
        <br />
        <br />
        Troll: Your Shadowguard heals you for{' '}
      </>,
      <>
        % of the damage dealt. <br />
        <br />
        Undead: Your Touch of Weakness gains{' '}
      </>,
      <> additional charges and stacks up to </>,
      <> additional times.</>,
    ],
    2,
    [
      [50, 100],
      [25, 50],
      [50, 100],
      [25, 50],
      [1, 2],
      [1, 2],
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
  new Talent('Force of Will', 'spell_nature_slowingtotem', ['Increases the critical strike chance of your offensive spells by ', '% and your spell damage by ', '%.'], 5, [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ]),
  null,
]

export default tier6
