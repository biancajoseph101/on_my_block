import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EditRecommendations = (props) => {

  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')
  const [clicked, setClicked] = useState(false)
  const [moreResults, setMoreResults] = useState({})

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
   const handleContent = (e) => {
    setContent(e.target.value)
}

const getMoreResults = async () => {
  const res = await axios.get(`http://localhost:3001/api/recommendations/${props.match.params.id}`)
  setMoreResults(res.data.recommendation)
}

useEffect(() => {
  getMoreResults()
}, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3001/api/recommendations/${props.match.params.id}`, {
            category: category,
            content: content,
            userId: props.userId,
        })
        setClicked(true)
    }
  return(
    <div>
     <form onSubmit={handleSubmit}>
                            <label>Edit your recommendation </label>
                            <br/>
                            <input className="formTextAreawitness" placeholder= {moreResults.category}id="content" type='text' onChange={handleCategory} />
                            <textarea className="formTextAreawitness" placeholder={moreResults.content} id="content" type='text' onChange={handleContent} />
                            <button className="commentsubmit">Submit</button>
                        </form>
                        {clicked ? (<h1>Recommendation edited succesfully</h1>):null}
    </div>
  )
}

export default EditRecommendations