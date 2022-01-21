import React, { useState } from "react"
import axios from "axios"
import { BaseURL } from '../globals'
// import { fa } from "faker/lib/locales"

function Likes(props) {
  const [likes, setLikes] = useState(0)

  const getlikes = async (e) => {
    const likes = await axios.get(`${BaseURL}/recommendations/${props.recommendation_id}`)
    setLikes(likes.data.recommendation.likes)
    
}
getlikes()
  const [newLikes, setNewLikes] = useState(0)
  const [click, setClick] = useState(false)

  const handleLike = async (e) => {
    e.preventDefault()
    console.log(props)
  
    if (click === false) {
      const newLikes = likes+1
      setNewLikes(newLikes)
     const recommendations = await axios.put(
        `${BaseURL}/recommendations/${props.recommendation_id}`,
        {
          likes: newLikes
        }
      )
      const newClick = true
      setClick(newClick)
      console.log(click)
  
    } 
    if (click === true) {
      const newLikes = likes-1
      setNewLikes(newLikes)
      await axios.put(
        `${BaseURL}/recommendations/${props.recommendation_id}`,
        {
          likes:newLikes,
        }
      )
      const newClick = false
      setClick(newClick)
    }
  }

  return (
    <div className="likes">
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
