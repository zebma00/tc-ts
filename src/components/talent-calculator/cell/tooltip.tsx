import React from 'react'

import styles from './cell.module.css'

interface TooltipProps {
  value: number
  description: string[]
  valueIteration: number[][]
  manaCost: string | null
  range: string | null
  castTime: string | null
  cooldown: string | null
  name: string
}

const Tooltip: React.FC<TooltipProps> = ({ value, description, valueIteration, manaCost, range, castTime, cooldown, name }) => {
  const activeTalent = !!manaCost || !!range || !!castTime || !!cooldown

  const renderDescription: any[] = []

  // renderDescription.push(valueIteration[value])
  const temp = description.map((text, index) => {
    renderDescription.push(text)
    if (index === 0) {
      renderDescription.push(0)
    } else if (index < description.length && index !== 0) {
      renderDescription.push(valueIteration[0][value])
    }
    // if (!!valueIteration[index][value]) {
    //   renderDescription.push(valueIteration[index][value])
    // }
  })

  console.log('RENDER', renderDescription)

  // const renderDescription = () => {}

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
          <div className={styles.tooltipActiveRow}>
            <div className={styles.tooltipActiveInfo}>{castTime}</div>
            <div className={styles.tooltipActiveInfo}>{cooldown}</div>
          </div>
        </>
      )}
      <div className={styles.tooltipDescription}>{renderDescription}</div>
    </div>
  )
}

export default Tooltip
