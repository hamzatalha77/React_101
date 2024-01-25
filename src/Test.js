import React, { useEffect, useState } from 'react'

const Test = () => {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => prev + 1)
    }, [1000])
    return () => {
      clearInterval(interval)
    }
  }, [])
  return <div> {number}</div>
}

export default Test

// const Test = () => {
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     let isCanceled = false
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => res.json())
//       .then((data) => {
//         if (!isCanceled) {
//           alert('test')
//           setPosts(data)
//           console.log(data)
//         }
//       })
//     return () => {
//       isCanceled = true
//     }
//   }, [])
//   return (
//     <div>
//       {posts.map((post, index) => (
//         <p key={index}>{post.title}</p>
//       ))}
//     </div>
//   )
// }

// export default Test
