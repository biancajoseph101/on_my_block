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
  
    if (click === false) {
      const newlikes = likes+1
      setNewLikes(newlikes)
     const recommendations = await axios.put(
        `http://localhost:3001/api/recommendations/${props.recommendation_id}`,
        {
          likes: newlikes
        }
      )
      const newClick = true
      setClick(newClick)
      console.log(click)
  
    } 
    if (click === true) {
      const newlikes = likes-1
      setNewLikes(newlikes)
      await axios.put(
        `http://localhost:3001/api/recommendations/${props.recommendation_id}`,
        {
          likes:newlikes,
        }
      )
      const newClick = false
      setClick(newClick)
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
