import { Talent } from '../../Classes'

export default [
  new Talent(
    'Improved Demon Armor',
    'spell_shadow_ragingscream',
    ['Causes your Demon armor to also restore ', '% of your total mana every 3 sec.'],
    2,
    [[0.5, 1]],
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
      isMoved: false
    }
  ),
  new Talent(
    'Improved Void Walker',
    'spell_shadow_summonvoidwalker',
    ["Increases the effect of your Void Walker's Torment, Sacrifice, Consume Shadows and Suffering spells by ", '%.'],
    3,
    [[10, 20, 30]]
  ),
  new Talent(
    'Fel Power',
    'spell_holy_magicalsentry',
    ['Increases the Intellect of your Imp, Succubus, Void Walker and Felhunter by ', '% and increases your maximum mana by ', '%.'],
    3,
    [
      [5, 10, 15],
      [1, 2, 3],
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
      isMoved: false
    }
  ),
  new Talent(
    'Improved Fire Stone',
    'inv_ammo_firetar',
    ['Your Firestone also increases your chance to hit with Fire spells by ', '% and reduces threat caused by your Fire spells by ', '%.'],
    2,
    [
      [2, 4],
      [15, 30],
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
      isMoved: true
    }
  ),
]
