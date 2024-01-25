import React, { useState } from 'react'

const Typing = () => {
  const [inputName, setInputName] = useState('')

  return (
    <div>
      <h1>Type Something</h1>
      <input
        type="text"
        placeholder="Names..."
        onChange={(e) => setInputName(e.target.value)}
      />
      <h1>{inputName}</h1>
    </div>
  )
}

export default Typing
