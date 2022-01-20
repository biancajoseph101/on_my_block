import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { BaseURL } from "../globals";

const UpdateCrime = (props) => {

    const getResults = async () => {
        const res = await axios.get(`${BaseURL}/tips/${props.match.params.id}`)
        setNewPost(res.data.tips)
    }

    useEffect(() => {
        getResults()
    }, [])

    const [newPost, setNewPost] = useState({})

    const handleChange = (e) => {
        const newest = { ...newPost }
        newest[e.target.id] = e.target.value
        setNewPost(newest)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`${BaseURL}/tips/${props.match.params.id}`, {
            title: newPost.title,
            content: newPost.content,
            neighborhoodId: newPost.neighborhoodId,
            userId: newPost.userId
        })
        props.history.push(`/crimes/${props.match.params.id}`)
        window.location.reload()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Crime Accused</h1>
                <input id='title' type='text' value={newPost.title} onChange={handleChange} />

                <h1>Crime Details</h1>
                <textarea id="content" value={newPost.content} onChange={handleChange}  />
<hr/>
                <button className="editbutton">Submit</button>
            </form>
        </div>
    )
}

export default UpdateCrime