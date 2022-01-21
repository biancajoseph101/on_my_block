import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import { BaseURL } from '../globals'

const CreateComment = (props) => {

    const [comment, setComment] = useState('')

    const handleChange = (e) => {
        setComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${BaseURL}/comments/`, {
            content: comment,
            neighborhoodId: props.neighborhoodId,
            userId: props.id,
            crimeId: props.match.params.id
        })
        window.location.reload()
    }


    return (
        <div>
            {
                (props.authenticated) ?
                    (
                        <form onSubmit={handleSubmit}>
                            <label>Post a Comment </label>
                            <br/>
                            <textarea className="formTextAreawitness" id="content" type='text' onChange={handleChange} />
                            <button className="commentsubmit">Submit</button>
                        </form>
                    ) : <h2>Want to share your opinion?<Link to='/login'>Login</Link></h2>
            }
        </div>
    )
}

export default CreateComment