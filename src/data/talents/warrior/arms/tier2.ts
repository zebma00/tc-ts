import { Talent } from '../../Classes'

export default [
  new Talent('Improved Hamstring', 'ability_shockwave', ['Gives your Hamstring a ', '% chance to immobilize the target for 5 sec.'], 3, [
    [10, 20, 30],
  ],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  { isNew: false,
    isChanged: false,
    isMoved: true
  }
  ),
  new Talent('Tactical Mastery', 'spell_nature_enchantarmor', ['You retain up to ', ' rage points when you change stances.'], 5, [
    [5, 10, 15, 20, 25],
  ],
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  { isNew: false,
    isChanged: true,
    isMoved: false
  }
  ),
  null,
  new Talent(
    'Improved Thunder Clap',
    'ability_thunderclap',
    ['Reduces the rage cost of your thunder clap by ', ' and increases its damage by ', '% when hitting a single target.'],
    3,
    [
      [1, 2, 3],
      [100, 200, 300],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false,
      isChanged: true,
      isMoved: false
    }
  ),
]
