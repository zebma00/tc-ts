import React from 'react'

import styles from './index.module.css'

interface SelectWrapperProps {
  classes: string[]
  selectedClass: string
  selectClass: (i: number) => void
}

const SelectWrapper: React.FC<SelectWrapperProps> = ({ classes, selectedClass, selectClass }) => {
  return (
    <div className={styles.selectWrapper}>
      {classes.map((singleClass: string, i: number) => {
        const isSelected = i === classes.indexOf(selectedClass)
        return (
          <div
            key={i}
            className={styles.iconWrapper}
            style={{
              border: isSelected ? '4px solid rgba(255, 209, 0, 0.8)' : '4px solid transparent',
              filter: isSelected ? 'none' : 'brightness(50%)',
            }}>
            <div className={styles.iconBorder} style={{ backgroundImage: `url("${process.env.PUBLIC_URL}/img/icons/border.png")` }} />
            <div
              className={styles.iconClass}
              style={{
                background: `url("${process.env.PUBLIC_URL}/img/icons/${singleClass}.jpg") 0 0 no-repeat`,
              }}>
              <button
                className={styles.selectButton}
                onClick={() => {
                  selectClass(i)
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SelectWrapper
