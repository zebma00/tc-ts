import React from 'react'

interface TCFooterProps {
  totalPoints: number | undefined
  pointsLeft: number
  resetPoints: () => void
}

const TCFooter: React.FC<TCFooterProps> = ({ totalPoints, pointsLeft, resetPoints }) => {
  return (
    <div>
      Current points: {totalPoints}
      <br />
      Points left: {pointsLeft}
      <button onClick={resetPoints}>Reset</button>
    </div>
  )
}

export default TCFooter
