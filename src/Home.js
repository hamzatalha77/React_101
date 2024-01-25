import React, { useEffect, useState } from 'react'

const Home = () => {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    console.count('useEffect run!!')
    document.title = `title of the app`
  }, [name])
  console.count('component rendered!')
  return (
    <div>
      <span>You clicked {number} times! </span>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="type something..."
      />
      <p>{name}</p>
    </div>
  )
}

export default Home
