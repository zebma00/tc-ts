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

  const renderDescription = () => {}

  return (
    <div
      className={styles.tooltipStyle}
      style={{
        backgroundImage: "url('/img/background/tooltip.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.tooltipHeader}>
        <div className={styles.tooltipTitle}>{name}</div>
        {!activeTalent && <div className={styles.tooltipRank}>{`Rank ${value}`}</div>}
      </div>
      {activeTalent && (
        <>
          <div className={styles.tooltipActiveRow}>
            <div className={styles.tooltipActiveInfo}>{manaCost}</div>
            <div className={styles.tooltipActiveInfo}>{range}</div>
          </div>
          <div>
            <div className={styles.tooltipActiveInfo}>{castTime}</div>
            <div className={styles.tooltipActiveInfo}>{cooldown}</div>
          </div>
        </>
      )}
      <div className={styles.tooltipDescription}>{description[0]}</div>
    </div>
  )
}

export default Tooltip
