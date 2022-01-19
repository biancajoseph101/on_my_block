import React, { useState } from 'react'
import axios from 'axios'


function Likes(props) {
    const [likes, setLikes] = useState(0);

    const handleLike = async (e) => {
        e.preventDefault();
        console.log(props)
        // setLikes(likes + 1)
        await axios.put(
          `http://localhost:3001/api/recommendations/${props.recommendation_id}`,
          {
            likes: setLikes(likes + 1)
          }
        );
      };
  
      return (
    <div>
    <button onClick={handleLike}>like</button>
    
    {likes}
    </div>
      )

}

export default Likes