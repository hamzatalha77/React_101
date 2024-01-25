import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiFetcher = () => {
  const [randomUser, setRandomUser] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setRandomUser(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <div>
      <h1>fetch data</h1>

      {randomUser.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </div>
  )
}

export default ApiFetcher
