import React, { useState } from 'react'
const Counting = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Calculator</h1>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        start
      </button>
    </div>
  )
}

export default Counting
