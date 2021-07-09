import React from 'react'

import styles from './cell.module.css'

interface TooltipProps {
  value: number
  description: string[]
  manaCost: string | null
  range: string | null
  castTime: string | null
  cooldown: string | null
  name: string
}

const Tooltip: React.FC<TooltipProps> = ({ value, description, manaCost, range, castTime, cooldown, name }) => {
  const activeTalent = !!manaCost || !!range || !!castTime || !!cooldown

  console.log('TRUE', activeTalent, manaCost, range, castTime, cooldown)

  return (
    <div className={styles.tooltipStyle} style={{ backgroundImage: "url('/img/background/tooltip.png')" }}>
      <div className={styles.tooltipHeader}>
        <div className={styles.tooltipTitle}>{name}</div>
        <div className={styles.tooltipRank}>{`Rank ${value}`}</div>
        {activeTalent && (
          <div>
            <div>{manaCost}</div>
            <div>{range}</div>
            <div>{castTime}</div>
            <div>{cooldown}</div>
          </div>
        )}
      </div>
      {description[0]}
    </div>
  )
}

export default Tooltip
