import React, { useState } from "react"
import axios from "axios"
// import { fa } from "faker/lib/locales"

function Likes(props) {
  const [likes, setLikes] = useState(0)
  const [click, setClick] = useState(false)

  const handleLike = async (e) => {
    e.preventDefault()
    console.log(props)
    const newlikes = likes+1
    setLikes(newlikes)
    console.log(likes)
    console.log(newlikes)
    console.log(click)

    if (click === false) {
      setClick(true)
      
     const recommendations = await axios.put(
        `http://localhost:3001/api/recommendations/${props.recommendation_id}`,
        {
          likes: newlikes
        }
      )
    
    } else if (click === true) {
      
      setClick(false)
      setLikes(likes-1)
      console.log(likes)
      await axios.put(
        `http://localhost:3001/api/recommendations/${props.recommendation_id}`,
        {
          likes:likes,
        }
      )
    }
  }

  return (
    <div>
      {props.authenticated ? (
        <>
          <button onClick={handleLike}>like</button>
        </>
      ) : null}
      {likes}
    </div>
  )
}

export default Likes
