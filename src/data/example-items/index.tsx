import { Item } from './Classes'

export default [
  new Item('Libram of Wrath', 'inv_misc_book_07', 'epic', 'Relic', 'Libram', null, null, null, null, [
    'Allows your Hammer of Wrath to be cast on targets with any amount of health, but reduces the damage by 95%.',
  ]),
  new Item('Totem of Tempest', 'inv_jewelry_amulet_06', 'epic', 'Relic', 'Totem', null, null, null, null, ['Reduces the threat of additional attacks from your Windury Weapon by 75%.']),
  // new Item('Idle of the World Tree', 'inv_qirajidol_life', 'epic', 'Relic', 'Idol', null, null, null, null, [
  //   'When you cast Innervate on a friendly target, you gain Innervate as well, but reduces the duration of your Innervate by 50%.',
  // ]),
  new Item('Band of Guidance', 'inv_jewelry_ring_43', 'epic', 'Finger', null, null, null, null, { stamina: 10, intellect: 10, agility: 0, strength: 0, spirit: 0 }, [
    'Equip: Increases your chance to hit by 2%.',
    'Equip: Increases your chance to hit with spells by 2%.',
  ]),
  new Item('Daybreak', 'inv_hammer_04', 'epic', 'Two-hand', 'Mace', 'Speed 3.00', '131 - 255 Damage', '(59.33 damage per second)', null, [
    'Chance on hit: Physical damage taken by target increased by 10% for 8 sec.',
  ]),
]
