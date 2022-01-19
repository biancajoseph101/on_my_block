import React, { useState } from "react"
import axios from "axios"
// import { fa } from "faker/lib/locales"

function Likes(props) {
  const [likes, setLikes] = useState(0)
  const [click, setClick] = useState(false)

  const handleLike = async (e) => {
    e.preventDefault()
    console.log(props)
    // setLikes(likes + 1)

    if (click === false) {
      setClick(true)
      setLikes(likes+1)
      await axios.put(
        `http://localhost:3001/api/recommendations/${props.recommendation_id}`,
        {
          likes:likes,
        }
      )
    } else if (click === true) {
      
      setClick(false)
      setLikes(likes-1)
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
