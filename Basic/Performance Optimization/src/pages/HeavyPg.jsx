import React from 'react'

const HeavyPg = () => {
  let sum = 0;
  for (let i = 0; i < 200_000_000; i++) {
    sum += i;
  }
  return (
    <div>
      <h1>{sum}</h1>
    </div>
  )
}

export default HeavyPg
