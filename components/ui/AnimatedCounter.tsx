import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ( { amount }: {amount: number} ) => {
  return (
    <div className="w-full">
      <CountUp
        decimals={2}
        prefix="$"
        end={amount}
        duration={1.5}
        />
    </div>
  )
}

export default AnimatedCounter