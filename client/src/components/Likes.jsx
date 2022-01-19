import React, { useState } from "react"
import axios from "axios"
// import { fa } from "faker/lib/locales"

function Likes(props) {
  const [likes, setLikes] = useState(0)

  const getlikes = async (e) => {
    const likes = await axios.get(`http://localhost:3001/api/recommendations/${props.recommendation_id}`)
    setLikes(likes.data.recommendation.likes)
    
}
getlikes()
  const [newlikes, setNewLikes] = useState(0)
  const [click, setClick] = useState(false)

  const handleLike = async (e) => {
    e.preventDefault()
    console.log(props)
    const newlikes = likes+1
    setNewLikes(newlikes)
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
      setNewLikes(likes-1)
      await axios.put(
        `http://localhost:3001/api/recommendations/${props.recommendation_id}`,
        {
          likes:newlikes,
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
