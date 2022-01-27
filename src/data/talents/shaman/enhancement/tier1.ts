import { Talent } from '../../Classes'

export default [
  null,
  new Talent('Ancestral Knowledge', 'spell_shadow_grimward', ['Increases your intellect and spirit by ', '%.'], 5, [[1, 2, 3, 4, 5]],
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
  new Talent('Ancestral Endurance', 'spell_nature_ancestralguardian', ['Increases your stamina and strength by ', '%.'], 5, [[1, 2, 3, 4, 5]],
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
  null,
]
