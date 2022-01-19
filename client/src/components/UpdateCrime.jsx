import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const UpdateCrime = (props) => {

    const getResults = async () => {
        const res = await axios.get(`http://localhost:3001/api/tips/${props.match.params.id}`)
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
        axios.put(`http://localhost:3001/api/tips/${props.match.params.id}`, {
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
                <label htmlFor="title">Title</label>
                <input id='title' type='text' value={newPost.title} onChange={handleChange} />

                <label htmlFor="content">Content</label>
                <textarea id="content" value={newPost.content} onChange={handleChange} />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateCrime