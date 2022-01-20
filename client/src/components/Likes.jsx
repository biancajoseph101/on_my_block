import React, { useState } from 'react'
import axios from 'axios'


function Likes(authenticated, recommendation_id) {
    const [likes, setLikes] = useState(0);
    const [clicked, setClicked] = useState(false)
    const handleLike = async (e) => {
        e.preventDefault();
        console.log(recommendation_id)
        // setLikes(likes + 1)
        await axios.put(
          `http://localhost:3001/api/recommendations/${recommendation_id}`,
          {
            likes: setLikes(likes + 1)
          }
        );
        setClicked(true)
      };
  
      return (
    <div>
   <h1>{likes} Likes</h1>
    {
      (authenticated)?
        (
          (!clicked) ? (
             <button onClick={handleLike}>like</button>
          ): null
              
          
        ):null
    }
    
    </div>
      )

}

export default Likes